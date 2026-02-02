import Link from 'next/link';
import Image from 'next/image';

export default function SponsorBar() {
  return (
    <div className="bg-neon text-surface text-center py-1.5 text-sm font-medium">
      <Link
        href="/acrytech"
        className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <Image
          src="/logos/acrytech-logo-1.png"
          alt="Acrytech"
          width={80}
          height={20}
          className="inline-block h-4 w-auto brightness-0"
        />
        <span>— Official Surface of the PPA Tour</span>
      </Link>
    </div>
  );
}
