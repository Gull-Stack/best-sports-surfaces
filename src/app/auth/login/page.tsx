'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  const handleMagicLink = async () => {
    if (!email) { setError('Enter your email first'); return; }
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
    }
    setLoading(false);
  };

  if (magicLinkSent) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <Card padding="lg" className="max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-text-primary mb-2">Check Your Email</h2>
          <p className="text-text-secondary">We sent a magic link to <strong>{email}</strong>. Click the link to sign in.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <Card padding="lg" className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-text-primary mb-6 text-center">Sign In</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <Button type="submit" loading={loading} className="w-full">Sign In</Button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={handleMagicLink} className="text-sm text-neon hover:underline" disabled={loading}>
            Sign in with Magic Link
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-text-secondary">
          <Link href="/auth/forgot-password" className="text-neon hover:underline">Forgot password?</Link>
          <span className="mx-2">|</span>
          <Link href="/auth/signup" className="text-neon hover:underline">Create account</Link>
        </div>
      </Card>
    </div>
  );
}
