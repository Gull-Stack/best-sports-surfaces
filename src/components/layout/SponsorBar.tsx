export default function SponsorBar() {
  return (
    <div className="bg-neon text-surface text-center py-1.5 text-sm font-medium">
      <span>Sponsored by </span>
      <a
        href="https://atsports.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline hover:no-underline"
      >
        ATSports.com
      </a>
      <span> — Quality Sports Surfaces & Equipment</span>
    </div>
  );
}
