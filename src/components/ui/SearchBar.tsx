'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SPORT_TYPES } from '@/lib/constants';

interface SearchBarProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export default function SearchBar({ size = 'sm', className = '' }: SearchBarProps) {
  const router = useRouter();
  const [zip, setZip] = useState('');
  const [sportType, setSportType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (zip) params.set('zip', zip);
    if (sportType) params.set('sport', sportType);
    router.push(`/search?${params.toString()}`);
  };

  const isLarge = size === 'lg';

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        className={`flex-1 bg-surface-raised border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-neon ${
          isLarge ? 'px-4 py-3 text-lg' : 'px-3 py-2'
        }`}
        maxLength={5}
        pattern="[0-9]*"
      />
      <select
        value={sportType}
        onChange={(e) => setSportType(e.target.value)}
        className={`flex-1 bg-surface-raised border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-neon ${
          isLarge ? 'px-4 py-3 text-lg' : 'px-3 py-2'
        }`}
      >
        <option value="">All Sport Types</option>
        {SPORT_TYPES.map((sport) => (
          <option key={sport.value} value={sport.value}>{sport.label}</option>
        ))}
      </select>
      <button
        type="submit"
        className={`bg-neon text-surface rounded-lg hover:bg-neon-hover transition-colors flex items-center justify-center gap-2 font-semibold ${
          isLarge ? 'px-8 py-3 text-lg' : 'px-4 py-2'
        }`}
      >
        <Search className={isLarge ? 'h-5 w-5' : 'h-4 w-4'} />
        Search
      </button>
    </form>
  );
}
