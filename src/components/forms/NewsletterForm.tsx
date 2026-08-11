'use client';

import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { trackLead } from '@/lib/track';
import { getHoneypotProps } from '@/lib/anti-spam';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailConfirm, setEmailConfirm] = useState('');
  const loadedAt = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          email_confirm: emailConfirm,
          timestamp: loadedAt.current,
        }),
      });
      if (!res.ok) throw new Error();
      trackLead('newsletter');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-sm text-text-secondary">Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* Honeypot — hidden from humans, filled by bots */}
      <input
        {...getHoneypotProps()}
        type="text"
        value={emailConfirm}
        onChange={(e) => setEmailConfirm(e.target.value)}
        aria-hidden="true"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon"
        required
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-3 py-2 bg-neon text-white rounded-lg hover:bg-neon-hover disabled:opacity-50"
        aria-label="Subscribe"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
