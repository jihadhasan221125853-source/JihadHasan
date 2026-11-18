import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildSystemInstruction,
  MAX_ASSISTANT_HISTORY,
  MAX_ASSISTANT_MESSAGE_LENGTH,
  sanitizeAssistantInput,
  validateAssistantMessages,
} from './assistant.ts';

test('sanitizeAssistantInput trims whitespace, collapses blank lines, and enforces max length', () => {
  const cleaned = sanitizeAssistantInput('  Hello\r\n\r\n\r\nWorld  ');
  assert.equal(cleaned, 'Hello\n\nWorld');

  const longInput = 'a'.repeat(MAX_ASSISTANT_MESSAGE_LENGTH + 50);
  assert.equal(sanitizeAssistantInput(longInput).length, MAX_ASSISTANT_MESSAGE_LENGTH);
});

test('validateAssistantMessages rejects empty arrays and non-user trailing messages', () => {
  assert.equal(validateAssistantMessages([]).valid, false);
  assert.equal(
    validateAssistantMessages([{ role: 'model', text: 'Welcome' }]).valid,
    false
  );
  assert.equal(
    validateAssistantMessages([{ role: 'user', text: '   ' }]).valid,
    false
  );
});

test('validateAssistantMessages accepts valid history and caps length to MAX_ASSISTANT_HISTORY', () => {
  const history = Array.from({ length: MAX_ASSISTANT_HISTORY + 4 }, (_, index) => ({
    role: index % 2 === 0 ? 'model' : 'user',
    text: `Turn ${index + 1}`,
  }));

  const result = validateAssistantMessages(history);
  assert.equal(result.valid, true);
  if (result.valid) {
    assert.equal(result.messages.length, MAX_ASSISTANT_HISTORY);
    assert.equal(result.messages[result.messages.length - 1].role, 'user');
    assert.equal(result.messages[0].text, 'Turn 5');
  }
});

test('buildSystemInstruction includes JIHAD services and adapts language directive', () => {
  const enPrompt = buildSystemInstruction('en');
  assert.match(enPrompt, /Search Engine Optimization \(SEO\)/);
  assert.match(enPrompt, /Facebook and Instagram Ads/);
  assert.match(enPrompt, /website set to English/);

  const bnPrompt = buildSystemInstruction('bn');
  assert.match(bnPrompt, /website set to Bengali/);
});
