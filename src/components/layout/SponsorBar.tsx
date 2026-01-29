export default function SponsorBar() {
  return (
    <div className="bg-brand text-white text-center py-1.5 text-sm">
      <span>Sponsored by </span>
      <a
        href="https://atsports.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline hover:no-underline"
      >
        ATSports.com
      </a>
      <span> — Quality Sports Surfaces & Equipment</span>
    </div>
  );
}
