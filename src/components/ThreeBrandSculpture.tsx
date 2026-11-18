import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { ChevronDown, ChevronUp, Maximize2, X } from 'lucide-react';
import type { SiteContent } from '../types/content';

export type CameraPreset = 'front' | 'isometric' | 'crown' | 'reset';
export type SculptureFinish = 'gold' | 'bronze';

interface ThreeBrandSculptureProps {
  mode: 'embedded' | 'fullscreen';
  cameraPreset?: CameraPreset;
  finish?: SculptureFinish;
  onExpand?: () => void;
  expandLabel?: string;
  caption?: string;
}

const CAMERA_PRESETS: Record<CameraPreset, { pos: [number, number, number]; target: [number, number, number] }> = {
  front: { pos: [0, 2.45, 8.0], target: [0, 1.9, 0] },
  isometric: { pos: [5.8, 4.2, 6.5], target: [0, 1.9, 0] },
  crown: { pos: [0.5, 6.8, 3.6], target: [0, 2.0, 0] },
  reset: { pos: [3.8, 2.95, 7.3], target: [0, 1.9, 0] },
};

const _targetPos = new THREE.Vector3();
const _targetLook = new THREE.Vector3();
const _dummy = new THREE.Object3D();

function detectSoftwareWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return true;
  }
}

function createBrushedMetalTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y++) {
      const lum = 112 + Math.floor((Math.sin(y * 0.7) * 0.5 + 0.5) * 32);
      ctx.fillStyle = `rgb(${lum},${lum},${lum})`;
      ctx.fillRect(0, y, 256, 1);
    }
    for (let i = 0; i < 420; i++) {
      const x = (i * 53) % 256;
      const y = (i * 29) % 256;
      const w = 18 + (i % 44);
      const v = 95 + (i % 65);
      ctx.fillStyle = `rgba(${v},${v},${v},0.35)`;
      ctx.fillRect(x, y, w, 1);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 3);
  return tex;
}

function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 124);
    grad.addColorStop(0, 'rgba(0,0,0,0.75)');
    grad.addColorStop(0.55, 'rgba(0,0,0,0.32)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function ThreeBrandSculpture({
  mode,
  cameraPreset = 'reset',
  finish = 'gold',
  onExpand,
  expandLabel,
  caption,
}: ThreeBrandSculptureProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const presetRef = useRef<CameraPreset>(cameraPreset);
  const finishRef = useRef<SculptureFinish>(finish);
  const triggerPresetRef = useRef<((preset: CameraPreset) => void) | null>(null);
  const triggerFinishRef = useRef<((f: SculptureFinish) => void) | null>(null);
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    presetRef.current = cameraPreset;
    triggerPresetRef.current?.(cameraPreset);
  }, [cameraPreset]);

  useEffect(() => {
    finishRef.current = finish;
    triggerFinishRef.current?.(finish);
  }, [finish]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isSoftwareGl = detectSoftwareWebGL();
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
        alpha: false,
      });
    } catch {
      setWebglReady(false);
      return;
    }

    const width = Math.max(container.clientWidth, 300);
    const height = Math.max(container.clientHeight, 300);

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.setAttribute('aria-label', 'Interactive 3D Strategy Compass');

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const bgHex = mode === 'fullscreen' ? 0x0a0807 : 0x0e0b09;
    scene.background = new THREE.Color(bgHex);
    scene.fog = new THREE.FogExp2(bgHex, 0.072);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const envTarget = pmremGenerator.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envTarget.texture;
    pmremGenerator.dispose();

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 80);
    const initial = CAMERA_PRESETS[presetRef.current];
    camera.position.set(...initial.pos);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(...initial.target);
    controls.enablePan = false;
    controls.minDistance = 3.6;
    controls.maxDistance = 10.5;
    controls.minPolarAngle = 0.25;
    controls.maxPolarAngle = Math.PI * 0.485;
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.autoRotate = false;
    controls.update();

    // Lighting rig: warm key + cool hemisphere fill + subtle rim
    const hemiLight = new THREE.HemisphereLight(0xcbd9ee, 0x211a15, 0.65);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffe9c8, 2.35);
    keyLight.position.set(5.5, 8.2, 5.0);
    if (!isSoftwareGl) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.near = 1;
      keyLight.shadow.camera.far = 22;
      keyLight.shadow.camera.left = -4.5;
      keyLight.shadow.camera.right = 4.5;
      keyLight.shadow.camera.top = 4.5;
      keyLight.shadow.camera.bottom = -4.5;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc6a15b, 0.9);
    rimLight.position.set(-5.0, 4.0, -4.5);
    scene.add(rimLight);

    // Procedural textures
    const brushedTex = createBrushedMetalTexture();
    brushedTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const shadowTex = createContactShadowTexture();

    // Shared PBR materials with clear roughness/metalness contrast
    const obsidianMat = new THREE.MeshStandardMaterial({
      color: 0x1a1512,
      roughness: 0.78,
      metalness: 0.14,
      bumpMap: brushedTex,
      bumpScale: 0.008,
    });

    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0x241c16,
      roughness: 0.36,
      metalness: 0.24,
      clearcoat: 0.45,
      clearcoatRoughness: 0.28,
    });

    const goldMat = new THREE.MeshPhysicalMaterial({
      color: finishRef.current === 'gold' ? 0xc6a15b : 0x8e6b47,
      roughness: 0.22,
      metalness: 0.94,
      bumpMap: brushedTex,
      bumpScale: 0.012,
      anisotropy: 0.65,
      clearcoat: 0.2,
    });

    const bronzeAccentMat = new THREE.MeshStandardMaterial({
      color: 0x5c4632,
      roughness: 0.48,
      metalness: 0.68,
    });

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0c0908,
      roughness: 0.96,
      metalness: 0.02,
    });

    // Studio floor + radial contact shadow disc
    const floorGeo = new THREE.CircleGeometry(28, 48);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = !isSoftwareGl;
    scene.add(floor);

    const contactGeo = new THREE.CircleGeometry(2.6, 36);
    const contactMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.55,
    });
    const contactDisc = new THREE.Mesh(contactGeo, contactMat);
    contactDisc.rotation.x = -Math.PI / 2;
    contactDisc.position.y = 0.015;
    scene.add(contactDisc);

    // Composite 10-part Architectural Strategy Compass (bottom-center pivot at y=0)
    const sculpture = new THREE.Group();
    scene.add(sculpture);

    // 1. Stepped obsidian plinth (LatheGeometry)
    const plinthPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(1.62, 0.0),
      new THREE.Vector2(1.62, 0.16),
      new THREE.Vector2(1.42, 0.22),
      new THREE.Vector2(1.36, 0.34),
      new THREE.Vector2(1.18, 0.38),
      new THREE.Vector2(0.0, 0.38),
    ];
    const plinthGeo = new THREE.LatheGeometry(plinthPts, 48);
    const plinthMesh = new THREE.Mesh(plinthGeo, obsidianMat);
    plinthMesh.castShadow = !isSoftwareGl;
    plinthMesh.receiveShadow = !isSoftwareGl;
    sculpture.add(plinthMesh);

    // 2. Chamfered brushed-gold collar ring (LatheGeometry)
    const collarPts = [
      new THREE.Vector2(1.06, 0.38),
      new THREE.Vector2(1.22, 0.38),
      new THREE.Vector2(1.24, 0.48),
      new THREE.Vector2(1.14, 0.53),
      new THREE.Vector2(1.04, 0.51),
      new THREE.Vector2(1.04, 0.38),
    ];
    const collarGeo = new THREE.LatheGeometry(collarPts, 48);
    const collarMesh = new THREE.Mesh(collarGeo, goldMat);
    collarMesh.castShadow = !isSoftwareGl;
    sculpture.add(collarMesh);

    // 3. Recessed compass dial plate
    const dialGeo = new THREE.CylinderGeometry(1.04, 1.04, 0.06, 40);
    const dialMesh = new THREE.Mesh(dialGeo, bronzeAccentMat);
    dialMesh.position.y = 0.43;
    sculpture.add(dialMesh);

    // 4. InstancedMesh: 36 precision gold graduation ticks
    const tickGeo = new THREE.BoxGeometry(0.024, 0.03, 0.12);
    const tickCount = 36;
    const ticksMesh = new THREE.InstancedMesh(tickGeo, goldMat, tickCount);
    for (let i = 0; i < tickCount; i++) {
      const angle = (i / tickCount) * Math.PI * 2;
      const isCardinal = i % 9 === 0;
      const radius = 0.88;
      _dummy.position.set(Math.sin(angle) * radius, 0.475, Math.cos(angle) * radius);
      _dummy.rotation.set(0, angle, 0);
      _dummy.scale.set(isCardinal ? 1.5 : 1, isCardinal ? 1.3 : 1, isCardinal ? 1.45 : 0.85);
      _dummy.updateMatrix();
      ticksMesh.setMatrixAt(i, _dummy.matrix);
    }
    ticksMesh.instanceMatrix.needsUpdate = true;
    ticksMesh.computeBoundingSphere();
    sculpture.add(ticksMesh);

    // 5. Pedestal cradle stem
    const stemGeo = new THREE.CylinderGeometry(0.14, 0.28, 0.45, 24);
    const stemMesh = new THREE.Mesh(stemGeo, obsidianMat);
    stemMesh.position.y = 0.68;
    sculpture.add(stemMesh);

    // 6. Outer meridian gimbal ring
    const outerRingGeo = new THREE.TorusGeometry(1.48, 0.048, 20, 72);
    const outerRing = new THREE.Mesh(outerRingGeo, goldMat);
    outerRing.position.y = 2.28;
    outerRing.rotation.y = Math.PI * 0.14;
    outerRing.castShadow = !isSoftwareGl;
    sculpture.add(outerRing);

    // 7. Inner tilted equatorial orbital ring
    const innerRingGeo = new THREE.TorusGeometry(1.18, 0.032, 18, 64);
    const innerRing = new THREE.Mesh(innerRingGeo, bronzeAccentMat);
    innerRing.position.y = 2.28;
    innerRing.rotation.set(Math.PI * 0.34, Math.PI * 0.22, 0.18);
    sculpture.add(innerRing);

    // 8. Four cardinal precision index pins on outer ring
    const pinGeo = new THREE.ConeGeometry(0.055, 0.22, 6);
    const pinsGroup = new THREE.Group();
    pinsGroup.position.y = 2.28;
    pinsGroup.rotation.y = Math.PI * 0.14;
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const pin = new THREE.Mesh(pinGeo, goldMat);
      pin.position.set(Math.cos(angle) * 1.48, Math.sin(angle) * 1.48, 0);
      pin.rotation.z = angle + Math.PI / 2;
      pinsGroup.add(pin);
    }
    sculpture.add(pinsGroup);

    // 9. Central faceted architectural monolith prism (ExtrudeGeometry with bevels)
    const hexShape = new THREE.Shape();
    const hexR = 0.42;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const x = Math.cos(a) * hexR;
      const y = Math.sin(a) * hexR;
      if (i === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();
    const prismGeo = new THREE.ExtrudeGeometry(hexShape, {
      depth: 1.55,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.06,
    });
    prismGeo.center();
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    prismMesh.rotation.x = Math.PI / 2;
    prismMesh.position.y = 2.28;
    prismMesh.castShadow = !isSoftwareGl;
    sculpture.add(prismMesh);

    // 10. Gold crown finial & orbital trajectory arc (LatheGeometry + TubeGeometry)
    const finialPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.18, 0.04),
      new THREE.Vector2(0.12, 0.2),
      new THREE.Vector2(0.04, 0.42),
      new THREE.Vector2(0.0, 0.46),
    ];
    const finialGeo = new THREE.LatheGeometry(finialPts, 24);
    const finialMesh = new THREE.Mesh(finialGeo, goldMat);
    finialMesh.position.y = 3.76;
    sculpture.add(finialMesh);

    const arcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.92, 1.52, 0.55),
      new THREE.Vector3(-0.35, 2.35, 0.92),
      new THREE.Vector3(0.42, 2.75, 0.62),
      new THREE.Vector3(0.95, 2.15, -0.45),
    ]);
    const arcGeo = new THREE.TubeGeometry(arcCurve, 40, 0.022, 12, false);
    const arcMesh = new THREE.Mesh(arcGeo, goldMat);
    sculpture.add(arcMesh);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    // Coalesced on-demand rendering + software WebGL afterDraw pacing
    let frameId = 0;
    let disposed = false;
    let renderBusy = false;
    let renderDirty = false;
    let transitionActive = false;
    let lastTime = performance.now();

    function afterDraw(cb: () => void) {
      if (disposed) return;
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) {
          if (sync) gl.deleteSync(sync);
          return;
        }
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function requestRender() {
      if (disposed) return;
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame((now) => {
        if (disposed) return;
        const dt = Math.min((now - lastTime) / 1000, 0.05);
        lastTime = now;
        renderDirty = false;

        if (transitionActive) {
          const factor = 1 - Math.exp(-7.5 * dt);
          camera.position.lerp(_targetPos, factor);
          controls.target.lerp(_targetLook, factor);
          if (
            camera.position.distanceTo(_targetPos) < 0.015 &&
            controls.target.distanceTo(_targetLook) < 0.015
          ) {
            camera.position.copy(_targetPos);
            controls.target.copy(_targetLook);
            transitionActive = false;
          } else {
            renderDirty = true;
          }
        }

        const dampingChanged = controls.update();
        if (!isSoftwareGl && dampingChanged) {
          renderDirty = true;
        }

        renderer.render(scene, camera);

        const done = () => {
          renderBusy = false;
          if (!disposed && renderDirty) {
            requestRender();
          }
        };

        if (isSoftwareGl) afterDraw(done);
        else done();
      });
    }

    controls.addEventListener('start', () => {
      transitionActive = false;
    });
    controls.addEventListener('change', () => {
      requestRender();
    });

    triggerPresetRef.current = (preset: CameraPreset) => {
      const targetCfg = CAMERA_PRESETS[preset];
      _targetPos.set(...targetCfg.pos);
      _targetLook.set(...targetCfg.target);
      if (isSoftwareGl) {
        camera.position.copy(_targetPos);
        controls.target.copy(_targetLook);
        transitionActive = false;
      } else {
        transitionActive = true;
      }
      requestRender();
    };

    triggerFinishRef.current = (f: SculptureFinish) => {
      goldMat.color.setHex(f === 'gold' ? 0xc6a15b : 0x8e6b47);
      goldMat.roughness = f === 'gold' ? 0.22 : 0.34;
      requestRender();
    };

    const resizeObserver = new ResizeObserver(() => {
      if (disposed || !container) return;
      const w = Math.max(container.clientWidth, 240);
      const h = Math.max(container.clientHeight, 240);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      requestRender();
    });
    resizeObserver.observe(container);

    requestRender();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      resizeObserver.disconnect();
      controls.dispose();
      triggerPresetRef.current = null;
      triggerFinishRef.current = null;

      const geometries = [
        floorGeo,
        contactGeo,
        plinthGeo,
        collarGeo,
        dialGeo,
        tickGeo,
        stemGeo,
        outerRingGeo,
        innerRingGeo,
        pinGeo,
        prismGeo,
        finialGeo,
        arcGeo,
      ];
      geometries.forEach((g) => g.dispose());
      [obsidianMat, prismMat, goldMat, bronzeAccentMat, floorMat, contactMat].forEach((m) =>
        m.dispose()
      );
      brushedTex.dispose();
      shadowTex.dispose();
      envTarget.dispose();
      renderer.dispose();
    };
  }, [mode]);

  if (!webglReady) {
    return (
      <div className="flex h-full min-h-[380px] w-full flex-col items-center justify-center border border-[#C6A15B]/25 bg-[#120E0B] p-8 text-center">
        <p className="font-display text-2xl text-[#F3EBDD]">JIHAD</p>
        <p className="mt-2 text-sm text-[#CFC3B0]">3D Strategy Compass Preview</p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        ref={mountRef}
        data-testid={mode === 'fullscreen' ? 'three-fullscreen-canvas' : 'three-hero-canvas'}
        className="h-full w-full cursor-grab active:cursor-grabbing"
      />
      {mode === 'embedded' && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-[#C6A15B]/20 bg-[#0E0B09]/92 px-5 py-3.5">
          <p className="truncate text-xs tracking-wide text-[#CFC3B0]">{caption}</p>
          {onExpand && expandLabel && (
            <button
              type="button"
              onClick={onExpand}
              className="pointer-events-auto inline-flex shrink-0 items-center gap-2 border border-[#C6A15B]/45 bg-[#211A15] px-3.5 py-2 text-xs font-medium text-[#F3EBDD] transition-colors duration-150 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap"
            >
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{expandLabel}</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

interface Studio3DModalProps {
  open: boolean;
  onClose: () => void;
  content: SiteContent['studio3d'];
}

export function Studio3DModal({ open, onClose, content }: Studio3DModalProps) {
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('reset');
  const [finish, setFinish] = useState<SculptureFinish>('gold');
  const [dockCollapsed, setDockCollapsed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key.toLowerCase() === 'h') setDockCollapsed((prev) => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
      className="fixed inset-0 z-50 h-screen w-screen bg-[#0A0807]"
    >
      <ThreeBrandSculpture mode="fullscreen" cameraPreset={cameraPreset} finish={finish} />

      {/* Minimal top-left title & top-right close */}
      <div className="pointer-events-none fixed inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
        <div className="pointer-events-auto border border-[#C6A15B]/25 bg-[#120E0B]/95 px-4 py-2.5">
          <h2 className="font-display text-base font-medium text-[#F3EBDD]">{content.title}</h2>
          <p className="text-xs text-[#CFC3B0]">{content.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={content.closeLabel}
          className="pointer-events-auto inline-flex min-h-[44px] items-center gap-2 border border-[#C6A15B]/40 bg-[#120E0B]/95 px-4 py-2 text-xs font-medium text-[#F3EBDD] transition-colors duration-150 hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
        >
          <X className="h-4 w-4" aria-hidden="true" />
          <span>{content.closeLabel}</span>
        </button>
      </div>

      {/* Collapsible Unified Bottom Dock (solid/rgba surface, no backdrop-filter over WebGL) */}
      <div className="fixed bottom-5 left-1/2 z-10 w-[min(780px,94vw)] -translate-x-1/2">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setDockCollapsed((prev) => !prev)}
            className="inline-flex min-h-[36px] items-center gap-1.5 border border-b-0 border-[#C6A15B]/35 bg-[#15100D]/95 px-4 py-1.5 text-xs font-medium text-[#F3EBDD] transition-colors hover:text-[#C6A15B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap"
          >
            {dockCollapsed ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{content.showControls}</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{content.hideControls}</span>
              </>
            )}
          </button>
        </div>

        {!dockCollapsed && (
          <div className="flex flex-wrap items-center justify-between gap-4 border border-[#C6A15B]/35 bg-[#15100D]/95 px-5 py-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium text-[#CFC3B0]">{content.cameraLabel}</span>
              {(['front', 'isometric', 'crown', 'reset'] as CameraPreset[]).map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setCameraPreset(preset)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    cameraPreset === preset
                      ? 'bg-[#C6A15B] text-[#080808]'
                      : 'border border-[#C6A15B]/25 bg-[#211A15] text-[#F3EBDD] hover:border-[#C6A15B]'
                  }`}
                >
                  {content.cameras[preset]}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-1 text-xs font-medium text-[#CFC3B0]">{content.finishLabel}</span>
              {(['gold', 'bronze'] as SculptureFinish[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFinish(f)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    finish === f
                      ? 'bg-[#C6A15B] text-[#080808]'
                      : 'border border-[#C6A15B]/25 bg-[#211A15] text-[#F3EBDD] hover:border-[#C6A15B]'
                  }`}
                >
                  {content.finishes[f]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
