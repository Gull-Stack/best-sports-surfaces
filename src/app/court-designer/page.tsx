'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';

/* ─── Types ─── */
type Sport = 'tennis' | 'pickleball' | 'basketball' | 'basketball-half' | 'multi-sport';

interface CourtConfig {
  label: string;
  icon: string;
  courtW: number;
  courtL: number;
  defaultW: number;
  defaultL: number;
  costPerSqFt: [number, number]; // [low, high]
}

interface Palette {
  name: string;
  play: string;
  surround: string;
  line: string;
}

/* ─── Constants ─── */
const SPORTS: Record<Sport, CourtConfig> = {
  tennis:          { label: 'Tennis',               icon: '🎾', courtW: 36, courtL: 78, defaultW: 60,  defaultL: 120, costPerSqFt: [6, 12] },
  pickleball:      { label: 'Pickleball',           icon: '🏓', courtW: 20, courtL: 44, defaultW: 34,  defaultL: 64,  costPerSqFt: [5, 10] },
  basketball:      { label: 'Basketball',           icon: '🏀', courtW: 50, courtL: 94, defaultW: 50,  defaultL: 94,  costPerSqFt: [5, 11] },
  'basketball-half': { label: 'Basketball (Half)',  icon: '🏀', courtW: 50, courtL: 47, defaultW: 50,  defaultL: 47,  costPerSqFt: [5, 11] },
  'multi-sport':   { label: 'Multi-Sport',          icon: '🏅', courtW: 60, courtL: 120, defaultW: 60, defaultL: 120, costPerSqFt: [6, 13] },
};

const PALETTES: Palette[] = [
  { name: 'Classic Blue/Green', play: '#2d6a4f', surround: '#1b4332', line: '#ffffff' },
  { name: 'US Open Blue',      play: '#1a66b3', surround: '#0d3b66', line: '#ffffff' },
  { name: 'Clay Red',          play: '#c1440e', surround: '#8b3a0e', line: '#ffffff' },
  { name: 'Custom',            play: '#2d6a4f', surround: '#1b4332', line: '#ffffff' },
];

/* ─── SVG Drawing Helpers ─── */
function scaleFactory(totalW: number, totalL: number, svgW: number, svgH: number) {
  const pad = 20;
  const scale = Math.min((svgW - pad * 2) / totalW, (svgH - pad * 2) / totalL);
  const offX = (svgW - totalW * scale) / 2;
  const offY = (svgH - totalL * scale) / 2;
  return { s: scale, offX, offY };
}

function GridPattern() {
  return (
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      </pattern>
    </defs>
  );
}

/* ─── Tennis Court Lines ─── */
function TennisLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  const singlesHW = (27 * s) / 2; // singles court is 27' wide
  const serviceDepth = 21 * s; // service line 21' from net
  const sw = 1.5;

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      {/* Court outline (doubles) */}
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      {/* Singles sidelines */}
      <line x1={cx - singlesHW} y1={cy - hl} x2={cx - singlesHW} y2={cy + hl} />
      <line x1={cx + singlesHW} y1={cy - hl} x2={cx + singlesHW} y2={cy + hl} />
      {/* Net */}
      <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} strokeWidth={2.5} />
      {/* Service lines */}
      <line x1={cx - singlesHW} y1={cy - serviceDepth} x2={cx + singlesHW} y2={cy - serviceDepth} />
      <line x1={cx - singlesHW} y1={cy + serviceDepth} x2={cx + singlesHW} y2={cy + serviceDepth} />
      {/* Center service line */}
      <line x1={cx} y1={cy - serviceDepth} x2={cx} y2={cy + serviceDepth} />
      {/* Center marks */}
      <line x1={cx} y1={cy - hl} x2={cx} y2={cy - hl + 4} />
      <line x1={cx} y1={cy + hl} x2={cx} y2={cy + hl - 4} />
    </g>
  );
}

/* ─── Pickleball Court Lines ─── */
function PickleballLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  const kitchen = 7 * s;
  const sw = 1.5;

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      {/* Net */}
      <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} strokeWidth={2.5} />
      {/* Kitchen / non-volley zone */}
      <line x1={cx - hw} y1={cy - kitchen} x2={cx + hw} y2={cy - kitchen} strokeDasharray="4 2" />
      <line x1={cx - hw} y1={cy + kitchen} x2={cx + hw} y2={cy + kitchen} strokeDasharray="4 2" />
      {/* Center line (each half) */}
      <line x1={cx} y1={cy - hl} x2={cx} y2={cy - kitchen} />
      <line x1={cx} y1={cy + hl} x2={cx} y2={cy + kitchen} />
    </g>
  );
}

/* ─── Basketball Court Lines ─── */
function BasketballLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor, isHalf }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  const sw = 1.5;

  // Key dimensions (NBA-ish)
  const keyW = 12 * s; // 12' wide lane
  const keyL = 19 * s; // 19' from baseline (free throw line)
  const ftRadius = 6 * s; // free throw circle radius
  const threeR = 23.75 * s; // 3-pt arc radius
  const threeCorner = 3 * s; // 3' from sideline
  const hoopDist = 5.25 * s; // hoop 5.25' from baseline
  const hoopR = 0.75 * s;
  const backboardW = 6 * s;
  const centerR = 6 * s;

  const drawHoop = (baseY: number, dir: number) => (
    <g>
      {/* Key / lane */}
      <rect x={cx - keyW / 2} y={baseY} width={keyW} height={keyL * dir} />
      {/* Free throw line already part of key rect top */}
      {/* Free throw circle */}
      <circle cx={cx} cy={baseY + keyL * dir} r={ftRadius} />
      {/* Backboard */}
      <line x1={cx - backboardW / 2} y1={baseY + hoopDist * dir} x2={cx + backboardW / 2} y2={baseY + hoopDist * dir} strokeWidth={2} />
      {/* Hoop */}
      <circle cx={cx} cy={baseY + hoopDist * dir + hoopR * dir * 2} r={hoopR} />
      {/* 3-point arc */}
      <path d={(() => {
        const hoopY = baseY + hoopDist * dir;
        const startX = cx - (courtW / 2 - 3) * s;
        const endX = cx + (courtW / 2 - 3) * s;
        // corner lines
        const cornerEndY = baseY + Math.sqrt(Math.max(0, threeR * threeR - ((courtW / 2 - 3) * s) ** 2)) * dir;
        // arc
        const sweep = dir > 0 ? 1 : 0;
        return `M ${startX} ${baseY} L ${startX} ${cornerEndY} A ${threeR} ${threeR} 0 0 ${sweep} ${endX} ${cornerEndY} L ${endX} ${baseY}`;
      })()} />
    </g>
  );

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      {/* Court outline */}
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      {!isHalf && (
        <>
          {/* Half court line */}
          <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} />
          {/* Center circle */}
          <circle cx={cx} cy={cy} r={centerR} />
          {/* Top hoop */}
          {drawHoop(cy - hl, 1)}
          {/* Bottom hoop */}
          {drawHoop(cy + hl, -1)}
        </>
      )}
      {isHalf && (
        <>
          {/* Baseline at bottom, half-court line at top */}
          <line x1={cx - hw} y1={cy - hl} x2={cx + hw} y2={cy - hl} strokeWidth={2} />
          {/* Center circle (half) */}
          <path d={`M ${cx - centerR} ${cy - hl} A ${centerR} ${centerR} 0 0 1 ${cx + centerR} ${cy - hl}`} />
          {/* Hoop at bottom */}
          {drawHoop(cy + hl, -1)}
        </>
      )}
    </g>
  );
}

/* ─── Multi-Sport Lines (Tennis + Pickleball overlay) ─── */
function MultiSportLines(props: any) {
  return (
    <>
      <TennisLines {...props} courtW={36} courtL={78} />
      <PickleballLines {...props} courtW={20} courtL={44} />
    </>
  );
}

/* ─── Extras SVG ─── */
function FencingOverlay({ s, offX, offY, totalW, totalL }: any) {
  const x = offX + 2;
  const y = offY + 2;
  const w = totalW * s - 4;
  const h = totalL * s - 4;
  return <rect x={x} y={y} width={w} height={h} fill="none" stroke="#888" strokeWidth={2} strokeDasharray="8 4" rx={2} />;
}

function LightingOverlay({ s, offX, offY, totalW, totalL }: any) {
  const positions = [
    [offX + 8, offY + 8],
    [offX + totalW * s - 8, offY + 8],
    [offX + 8, offY + totalL * s - 8],
    [offX + totalW * s - 8, offY + totalL * s - 8],
  ];
  return (
    <g>
      {positions.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={5} fill="#fbbf24" opacity={0.8} />
          <circle cx={x} cy={y} r={10} fill="none" stroke="#fbbf24" opacity={0.3} strokeWidth={1} />
          <circle cx={x} cy={y} r={16} fill="none" stroke="#fbbf24" opacity={0.15} strokeWidth={0.5} />
        </g>
      ))}
    </g>
  );
}

function NetOverlay({ s, offX, offY, totalW, totalL, sport }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  if (sport === 'basketball' || sport === 'basketball-half') {
    // Show hoop indicator
    return (
      <g>
        <circle cx={cx} cy={offY + totalL * s - 12} r={6} fill="none" stroke="#f97316" strokeWidth={2} />
        <text x={cx} y={offY + totalL * s - 6} textAnchor="middle" fill="#f97316" fontSize="7">HOOP</text>
      </g>
    );
  }
  // Net for tennis/pickleball
  return (
    <g>
      <line x1={offX + 10} y1={cy} x2={offX + totalW * s - 10} y2={cy} stroke="#f97316" strokeWidth={3} opacity={0.6} />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#f97316" fontSize="7">NET</text>
    </g>
  );
}

/* ─── Main Component ─── */
export default function CourtDesignerPage() {
  const [sport, setSport] = useState<Sport>('tennis');
  const [width, setWidth] = useState(SPORTS.tennis.defaultW);
  const [length, setLength] = useState(SPORTS.tennis.defaultL);
  const [playColor, setPlayColor] = useState(PALETTES[0].play);
  const [surroundColor, setSurroundColor] = useState(PALETTES[0].surround);
  const [lineColor, setLineColor] = useState(PALETTES[0].line);
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [fencing, setFencing] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [netHoop, setNetHoop] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  const config = SPORTS[sport];
  const sqFt = width * length;

  const changeSport = useCallback((s: Sport) => {
    setSport(s);
    setWidth(SPORTS[s].defaultW);
    setLength(SPORTS[s].defaultL);
  }, []);

  const applyPalette = useCallback((idx: number) => {
    setPaletteIdx(idx);
    if (idx < PALETTES.length - 1) {
      setPlayColor(PALETTES[idx].play);
      setSurroundColor(PALETTES[idx].surround);
      setLineColor(PALETTES[idx].line);
    }
  }, []);

  // Cost estimate
  const costLow = Math.round(sqFt * config.costPerSqFt[0]);
  const costHigh = Math.round(sqFt * config.costPerSqFt[1]);
  const fencingCost = fencing ? Math.round((width + length) * 2 * 45) : 0;
  const lightingCost = lighting ? 12000 : 0;

  // SVG dimensions
  const SVG_W = 600;
  const SVG_H = 440;
  const { s, offX, offY } = useMemo(() => scaleFactory(width, length, SVG_W, SVG_H), [width, length]);

  const lineProps = { s, offX, offY, courtW: config.courtW, courtL: config.courtL, totalW: width, totalL: length, lineColor };

  const handleDownload = useCallback(async () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svgEl);
    const canvas = document.createElement('canvas');
    const dpr = 2;
    canvas.width = SVG_W * dpr;
    canvas.height = SVG_H * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const img = new Image();
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      ctx.drawImage(img, 0, 0, SVG_W, SVG_H);
      URL.revokeObjectURL(url);
      const link = document.createElement('a');
      link.download = `court-design-${sport}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = url;
  }, [sport]);

  return (
    <main className="min-h-screen bg-surface text-text-primary">
      {/* Header */}
      <div className="border-b border-border bg-surface-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-neon">Court</span> Designer
          </h1>
          <p className="mt-1 text-text-secondary">Design your custom court and get instant estimates</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* ─── Left Panel: Controls ─── */}
          <div className="w-full shrink-0 space-y-6 lg:w-80">

            {/* Sport Selection */}
            <section className="rounded-xl border border-border bg-surface-card p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Sport</h2>
              <div className="grid grid-cols-2 gap-2">
                {(Object.entries(SPORTS) as [Sport, CourtConfig][]).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => changeSport(key)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition-all ${
                      sport === key
                        ? 'border-neon bg-neon-subtle text-neon font-medium'
                        : 'border-border hover:border-neon/40 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <span className="mr-1">{val.icon}</span> {val.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Dimensions */}
            <section className="rounded-xl border border-border bg-surface-card p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Dimensions (ft)</h2>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="mb-1 block text-xs text-text-secondary">Width</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.max(10, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-neon focus:outline-none"
                  />
                </div>
                <span className="mt-5 text-text-secondary">×</span>
                <div className="flex-1">
                  <label className="mb-1 block text-xs text-text-secondary">Length</label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Math.max(10, Number(e.target.value)))}
                    className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-neon focus:outline-none"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-xs text-text-secondary">
                {width}&apos; × {length}&apos; = <span className="font-semibold text-neon">{sqFt.toLocaleString()} sq ft</span>
              </p>
            </section>

            {/* Color Customization */}
            <section className="rounded-xl border border-border bg-surface-card p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Colors</h2>
              {/* Palettes */}
              <div className="mb-4 flex flex-wrap gap-2">
                {PALETTES.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => applyPalette(i)}
                    className={`rounded-md border px-2.5 py-1 text-xs transition-all ${
                      paletteIdx === i
                        ? 'border-neon bg-neon-subtle text-neon'
                        : 'border-border text-text-secondary hover:border-neon/40'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              {/* Color pickers */}
              {[
                { label: 'Playing Area', value: playColor, set: (v: string) => { setPlayColor(v); setPaletteIdx(3); } },
                { label: 'Surround', value: surroundColor, set: (v: string) => { setSurroundColor(v); setPaletteIdx(3); } },
                { label: 'Lines', value: lineColor, set: (v: string) => { setLineColor(v); setPaletteIdx(3); } },
              ].map((c) => (
                <div key={c.label} className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-text-secondary">{c.label}</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={c.value}
                      onChange={(e) => c.set(e.target.value)}
                      className="h-8 w-8 cursor-pointer rounded border border-border bg-transparent"
                    />
                    <span className="w-16 font-mono text-xs text-text-secondary">{c.value}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Extras */}
            <section className="rounded-xl border border-border bg-surface-card p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Extras</h2>
              {[
                { label: 'Fencing', checked: fencing, set: setFencing, icon: '🔗' },
                { label: 'Lighting', checked: lighting, set: setLighting, icon: '💡' },
                { label: sport.includes('basketball') ? 'Hoop' : 'Net', checked: netHoop, set: setNetHoop, icon: sport.includes('basketball') ? '🏀' : '🥅' },
              ].map((t) => (
                <label key={t.label} className="mb-2 flex cursor-pointer items-center justify-between last:mb-0">
                  <span className="text-sm text-text-secondary">
                    <span className="mr-1.5">{t.icon}</span>{t.label}
                  </span>
                  <div
                    className={`relative h-6 w-11 rounded-full transition-colors ${t.checked ? 'bg-neon' : 'bg-surface'}`}
                    onClick={() => t.set(!t.checked)}
                  >
                    <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${t.checked ? 'left-[22px]' : 'left-0.5'}`} />
                  </div>
                </label>
              ))}
            </section>
          </div>

          {/* ─── Right Panel: Preview + Cost ─── */}
          <div className="flex-1 space-y-6">
            {/* SVG Preview */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Preview</h2>
                <span className="text-xs text-text-secondary">
                  {config.icon} {config.label} — {width}&apos; × {length}&apos;
                </span>
              </div>
              <div className="flex items-center justify-center p-4">
                <svg
                  ref={svgRef}
                  viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                  width="100%"
                  height="100%"
                  className="max-h-[500px] w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <GridPattern />
                  {/* Background */}
                  <rect width={SVG_W} height={SVG_H} fill="#0a0a0f" />
                  <rect width={SVG_W} height={SVG_H} fill="url(#grid)" />

                  {/* Surround area */}
                  <rect
                    x={offX}
                    y={offY}
                    width={width * s}
                    height={length * s}
                    fill={surroundColor}
                    rx={3}
                  />

                  {/* Playing area */}
                  <rect
                    x={offX + ((width - config.courtW) * s) / 2}
                    y={offY + ((length - config.courtL) * s) / 2}
                    width={config.courtW * s}
                    height={config.courtL * s}
                    fill={playColor}
                  />

                  {/* Court lines */}
                  {sport === 'tennis' && <TennisLines {...lineProps} />}
                  {sport === 'pickleball' && <PickleballLines {...lineProps} />}
                  {sport === 'basketball' && <BasketballLines {...lineProps} isHalf={false} />}
                  {sport === 'basketball-half' && <BasketballLines {...lineProps} isHalf={true} />}
                  {sport === 'multi-sport' && <MultiSportLines {...lineProps} />}

                  {/* Extras */}
                  {fencing && <FencingOverlay s={s} offX={offX} offY={offY} totalW={width} totalL={length} />}
                  {lighting && <LightingOverlay s={s} offX={offX} offY={offY} totalW={width} totalL={length} />}
                  {netHoop && <NetOverlay s={s} offX={offX} offY={offY} totalW={width} totalL={length} sport={sport} />}

                  {/* Dimension labels */}
                  <text x={offX + (width * s) / 2} y={offY + length * s + 16} textAnchor="middle" fill="#666" fontSize="11" fontFamily="monospace">
                    {width}&apos;
                  </text>
                  <text x={offX - 10} y={offY + (length * s) / 2} textAnchor="middle" fill="#666" fontSize="11" fontFamily="monospace" transform={`rotate(-90, ${offX - 10}, ${offY + (length * s) / 2})`}>
                    {length}&apos;
                  </text>
                </svg>
              </div>
            </div>

            {/* Cost Estimate */}
            <div className="rounded-xl border border-border bg-surface-card p-5">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">Estimated Cost</h2>
              <div className="flex flex-wrap items-end gap-6">
                <div>
                  <p className="text-xs text-text-secondary">Surface</p>
                  <p className="text-2xl font-bold text-neon">
                    ${costLow.toLocaleString()} – ${costHigh.toLocaleString()}
                  </p>
                </div>
                {fencing && (
                  <div>
                    <p className="text-xs text-text-secondary">Fencing</p>
                    <p className="text-lg font-semibold text-text-primary">+${fencingCost.toLocaleString()}</p>
                  </div>
                )}
                {lighting && (
                  <div>
                    <p className="text-xs text-text-secondary">Lighting</p>
                    <p className="text-lg font-semibold text-text-primary">+${lightingCost.toLocaleString()}</p>
                  </div>
                )}
              </div>
              <p className="mt-2 text-xs text-text-secondary">
                Total range: <span className="font-medium text-text-primary">
                  ${(costLow + fencingCost + lightingCost).toLocaleString()} – ${(costHigh + fencingCost + lightingCost).toLocaleString()}
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleDownload}
                className="flex-1 rounded-xl bg-neon px-6 py-3 text-center font-semibold text-black transition-opacity hover:opacity-90"
              >
                ⬇ Download Design (PNG)
              </button>
              <Link
                href={`/search?sport=${sport.replace('-half', '')}`}
                className="flex-1 rounded-xl border border-neon px-6 py-3 text-center font-semibold text-neon transition-colors hover:bg-neon-subtle"
              >
                Get Quotes from Contractors →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
