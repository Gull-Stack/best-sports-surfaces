'use client';

import dynamic from 'next/dynamic';

const CourtDesigner = dynamic(() => import('@/components/tools/CourtDesigner'), { ssr: false });

type Sport = 'tennis' | 'pickleball' | 'basketball' | 'basketball-half' | 'multi-sport';

export default function CourtDesignerEmbed({ defaultSport = 'tennis' }: { defaultSport?: Sport }) {
  return <CourtDesigner defaultSport={defaultSport} showHeader={false} />;
}
