'use client';

import dynamic from 'next/dynamic';

const CourtDesigner = dynamic(() => import('@/components/tools/CourtDesigner'), { ssr: false });

export default function CourtDesignerPage() {
  return (
    <main className="min-h-screen bg-surface text-text-primary">
      <CourtDesigner showHeader={true} />
    </main>
  );
}
