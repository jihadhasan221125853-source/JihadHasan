import { useEffect, useRef, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Loader2,
  MessageSquare,
  RotateCcw,
  SendHorizontal,
  Sparkles,
  X,
} from 'lucide-react';
import type { Language, SiteContent } from '../types/content';
import {
  MAX_ASSISTANT_MESSAGE_LENGTH,
  sanitizeAssistantInput,
  type AssistantMessage,
} from '../utils/assistant';

interface AIAssistantWidgetProps {
  content: SiteContent['assistant'];
  language: Language;
  onBookAudit: () => void;
}

export function AIAssistantWidget({
  content,
  language,
  onBookAudit,
}: AIAssistantWidgetProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const listEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, errorMessage, open]);

  async function sendMessage(rawText: string) {
    const cleaned = sanitizeAssistantInput(rawText);
    if (!cleaned || isLoading) return;

    const userMessage: AssistantMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: cleaned,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          messages: nextMessages.map(({ role, text }) => ({ role, text })),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !data.reply) {
        setErrorMessage(
          data.error ||
            (language === 'bn'
              ? 'এই মুহূর্তে এআই অ্যাসিস্ট্যান্টের সাথে সংযোগ করা যাচ্ছে না। অনুগ্রহ করে পরে আবার চেষ্টা করুন।'
              : 'Unable to reach the AI assistant right now. Please try again shortly.')
        );
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `model-${Date.now()}`,
          role: 'model',
          text: data.reply!,
        },
      ]);
    } catch {
      setErrorMessage(
        language === 'bn'
          ? 'নেটওয়ার্ক ত্রুটির কারণে উত্তর পাওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।'
          : 'A network error interrupted the request. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleReset() {
    setMessages([]);
    setErrorMessage(null);
    setInput('');
    inputRef.current?.focus();
  }

  function handleBookAuditClick() {
    setOpen(false);
    onBookAudit();
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={content.openAriaLabel}
          aria-expanded={open}
          data-testid="ai-assistant-launcher"
          className="group flex items-center gap-2.5 border border-[#C6A15B]/60 bg-[#14100C] px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#F3EBDD] shadow-[0_14px_40px_rgba(0,0,0,0.65)] transition-colors hover:border-[#C6A15B] hover:bg-[#211A15] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B]"
        >
          <Sparkles className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
          <span>{content.launcherLabel}</span>
        </button>
      ) : (
        <section
          role="dialog"
          aria-label={content.title}
          data-testid="ai-assistant-panel"
          className="flex h-[540px] max-h-[calc(100vh-3rem)] w-[calc(100vw-2.5rem)] flex-col border border-[#C6A15B]/45 bg-[#0E0B09] text-[#F3EBDD] shadow-[0_24px_64px_rgba(0,0,0,0.85)] sm:w-[410px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#C6A15B]/25 bg-[#19130F] px-5 py-4">
            <div>
              <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#C6A15B]">
                <MessageSquare className="h-3 w-3" aria-hidden="true" />
                <span>{content.eyebrow}</span>
              </p>
              <h2 className="mt-0.5 font-serif text-lg font-medium text-[#F3EBDD]">
                {content.title}
              </h2>
            </div>

            <div className="flex items-center gap-1.5">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label={content.resetAriaLabel}
                  title={content.resetAriaLabel}
                  className="border border-[#C6A15B]/25 p-2 text-[#F3EBDD]/75 transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={content.closeAriaLabel}
                className="border border-[#C6A15B]/25 p-2 text-[#F3EBDD]/75 transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {/* Welcome bubble */}
            <div className="max-w-[92%] border border-[#C6A15B]/20 bg-[#17120E] px-4 py-3 text-sm leading-relaxed text-[#F3EBDD]/90">
              {content.welcomeMessage}
            </div>

            {/* Quick prompts before first message */}
            {messages.length === 0 && (
              <div className="space-y-2 pt-1">
                {content.quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    disabled={isLoading}
                    onClick={() => void sendMessage(prompt)}
                    className="block w-full border border-[#C6A15B]/30 bg-[#120E0B] px-3.5 py-2.5 text-left text-xs leading-snug text-[#F3EBDD]/85 transition-colors hover:border-[#C6A15B] hover:bg-[#211A15] hover:text-[#F3EBDD] disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation turns */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap px-4 py-3 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'bg-[#C6A15B] font-medium text-[#080808]'
                      : 'border border-[#C6A15B]/20 bg-[#17120E] text-[#F3EBDD]/95'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 border border-[#C6A15B]/20 bg-[#17120E] px-4 py-3 text-xs text-[#C6A15B]">
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                <span>{content.thinkingLabel}</span>
              </div>
            )}

            {/* Honest error banner */}
            {errorMessage && (
              <div
                role="alert"
                className="border border-red-400/40 bg-red-950/40 px-4 py-3 text-xs leading-relaxed text-red-200"
              >
                {errorMessage}
              </div>
            )}

            <div ref={listEndRef} />
          </div>

          {/* Direct CTA strip */}
          <div className="border-t border-[#C6A15B]/15 bg-[#14100C] px-5 py-2.5">
            <button
              type="button"
              onClick={handleBookAuditClick}
              className="flex w-full items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-[#C6A15B] transition-colors hover:text-[#F3EBDD]"
            >
              <span>{content.bookAuditCta}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-[#C6A15B]/25 bg-[#120E0B] p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={MAX_ASSISTANT_MESSAGE_LENGTH}
              placeholder={content.inputPlaceholder}
              disabled={isLoading}
              className="min-w-0 flex-1 border border-[#C6A15B]/25 bg-[#080808] px-3.5 py-2.5 text-sm text-[#F3EBDD] placeholder:text-[#F3EBDD]/40 focus:border-[#C6A15B] focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label={content.sendAriaLabel}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C6A15B] bg-[#C6A15B] text-[#080808] transition-colors hover:bg-[#d4b06b] disabled:cursor-not-allowed disabled:border-[#C6A15B]/30 disabled:bg-[#211A15] disabled:text-[#F3EBDD]/40"
            >
              <SendHorizontal className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
