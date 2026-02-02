'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?type=recovery`,
    });

    if (error) setError(error.message);
    else setSent(true);
    setLoading(false);
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <Card padding="lg" className="max-w-md w-full">
        {sent ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-text-primary mb-2">Check Your Email</h2>
            <p className="text-text-secondary">If an account exists for <strong>{email}</strong>, you will receive a password reset link.</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-text-primary mb-6 text-center">Reset Password</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
              {error && <p className="text-sm text-red-400">{error}</p>}
              <Button type="submit" loading={loading} className="w-full">Send Reset Link</Button>
            </form>
          </>
        )}
        <p className="mt-4 text-center text-sm text-text-secondary">
          <Link href="/auth/login" className="text-neon hover:underline">Back to Sign In</Link>
        </p>
      </Card>
    </div>
  );
}
