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
  basketball:      { label: 'Basketball',           icon: '🏀', courtW: 50, courtL: 84, defaultW: 56,  defaultL: 90,  costPerSqFt: [5, 11] },
  'basketball-half': { label: 'Basketball (Half)',  icon: '🏀', courtW: 50, courtL: 42, defaultW: 56,  defaultL: 48,  costPerSqFt: [5, 11] },
  'multi-sport':   { label: 'Multi-Sport',          icon: '🏅', courtW: 60, courtL: 120, defaultW: 60, defaultL: 120, costPerSqFt: [6, 13] },
};

const PALETTES: Palette[] = [
  { name: 'Competition Blue/Green', play: '#1a66b3', surround: '#2d6a4f', line: '#ffffff' },
  { name: 'US Open Blue',           play: '#3a7fd5', surround: '#1a4f8b', line: '#ffffff' },
  { name: 'Classic Red/Green',      play: '#c1440e', surround: '#2d6a4f', line: '#ffffff' },
  { name: 'Frost Blue/Gray',        play: '#6ba3d6', surround: '#6b7b8d', line: '#ffffff' },
  { name: 'Forest/Sandstone',       play: '#1b4332', surround: '#c2a97e', line: '#ffffff' },
  { name: 'Custom',                 play: '#2d6a4f', surround: '#1b4332', line: '#ffffff' },
];

/* ─── Acrytech Color Swatches ─── */
const ACRYTECH_COLORS = [
  { name: 'Competition Green', hex: '#2d6a4f' },
  { name: 'Performance Green', hex: '#3a8f5c' },
  { name: 'Field Green',       hex: '#4a7c3f' },
  { name: 'Forest Green',      hex: '#1b4332' },
  { name: 'Irish Green',       hex: '#009a44' },
  { name: 'Kiwi',              hex: '#7ab648' },
  { name: 'Lime',              hex: '#a4d65e' },
  { name: 'Sea Green',         hex: '#00a78e' },
  { name: 'Light Blue',        hex: '#6ba3d6' },
  { name: 'Standard Blue',     hex: '#1a66b3' },
  { name: 'Competition Blue',  hex: '#0d4f8b' },
  { name: 'Frost Blue',        hex: '#a0c4e8' },
  { name: 'Sky Blue',          hex: '#5bb7e8' },
  { name: 'Caribbean Blue',    hex: '#00a3b4' },
  { name: 'Nautical Navy',     hex: '#1c2951' },
  { name: 'Sandstone',         hex: '#c2a97e' },
  { name: 'Beige',             hex: '#d4c5a9' },
  { name: 'Terracotta',        hex: '#c1440e' },
  { name: 'Orange',            hex: '#e87722' },
  { name: 'Bright Orange',     hex: '#ff6900' },
  { name: 'Classic Red',       hex: '#b22234' },
  { name: 'Crimson',           hex: '#9b1b30' },
  { name: 'Bright Red',        hex: '#e03c31' },
  { name: 'Coral',             hex: '#ef6c5b' },
  { name: 'Passion Pink',      hex: '#e84393' },
  { name: 'Bright Yellow',     hex: '#ffd700' },
  { name: 'Slate',             hex: '#6b7b8d' },
  { name: 'Gray',              hex: '#8e9196' },
  { name: 'Black',             hex: '#1a1a1a' },
  { name: 'Pro Purple',        hex: '#6b3fa0' },
  { name: 'Ultra Violet',      hex: '#5f2580' },
  { name: 'Viva Violet',       hex: '#803ca0' },
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
function TennisLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor, rotated }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  // Original tennis: 36' wide (doubles), 78' long, 27' wide (singles), 21' service depth
  // courtW/courtL are already swapped if rotated
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  // Singles and service use original dimensions mapped to correct axis
  const singlesHalf = rotated ? (27 * s) / 2 : (27 * s) / 2; // singles lines parallel to length
  const serviceDist = 21 * s; // service line distance from net
  const sw = 1.5;

  if (rotated) {
    // Landscape: length is horizontal (78'), width is vertical (36')
    // Net is vertical at center, service lines are vertical
    return (
      <g stroke={lineColor} strokeWidth={sw} fill="none">
        <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
        {/* Singles sidelines (horizontal lines, 27' apart centered) */}
        <line x1={cx - hw} y1={cy - singlesHalf} x2={cx + hw} y2={cy - singlesHalf} />
        <line x1={cx - hw} y1={cy + singlesHalf} x2={cx + hw} y2={cy + singlesHalf} />
        {/* Net (vertical at center) */}
        <line x1={cx} y1={cy - hl} x2={cx} y2={cy + hl} strokeWidth={2.5} />
        {/* Service lines (vertical) */}
        <line x1={cx - serviceDist} y1={cy - singlesHalf} x2={cx - serviceDist} y2={cy + singlesHalf} />
        <line x1={cx + serviceDist} y1={cy - singlesHalf} x2={cx + serviceDist} y2={cy + singlesHalf} />
        {/* Center service line */}
        <line x1={cx - serviceDist} y1={cy} x2={cx + serviceDist} y2={cy} />
        {/* Center marks */}
        <line x1={cx - hw} y1={cy} x2={cx - hw + 4} y2={cy} />
        <line x1={cx + hw} y1={cy} x2={cx + hw - 4} y2={cy} />
      </g>
    );
  }

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      <line x1={cx - singlesHalf} y1={cy - hl} x2={cx - singlesHalf} y2={cy + hl} />
      <line x1={cx + singlesHalf} y1={cy - hl} x2={cx + singlesHalf} y2={cy + hl} />
      <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} strokeWidth={2.5} />
      <line x1={cx - singlesHalf} y1={cy - serviceDist} x2={cx + singlesHalf} y2={cy - serviceDist} />
      <line x1={cx - singlesHalf} y1={cy + serviceDist} x2={cx + singlesHalf} y2={cy + serviceDist} />
      <line x1={cx} y1={cy - serviceDist} x2={cx} y2={cy + serviceDist} />
      <line x1={cx} y1={cy - hl} x2={cx} y2={cy - hl + 4} />
      <line x1={cx} y1={cy + hl} x2={cx} y2={cy + hl - 4} />
    </g>
  );
}

/* ─── Pickleball Court Lines ─── */
function PickleballLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor, rotated }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  const kitchen = 7 * s;
  const sw = 1.5;

  if (rotated) {
    // Landscape: length horizontal (44'), width vertical (20')
    return (
      <g stroke={lineColor} strokeWidth={sw} fill="none">
        <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
        {/* Net (vertical at center) */}
        <line x1={cx} y1={cy - hl} x2={cx} y2={cy + hl} strokeWidth={2.5} />
        {/* Kitchen / non-volley zone (vertical lines) */}
        <line x1={cx - kitchen} y1={cy - hl} x2={cx - kitchen} y2={cy + hl} strokeDasharray="4 2" />
        <line x1={cx + kitchen} y1={cy - hl} x2={cx + kitchen} y2={cy + hl} strokeDasharray="4 2" />
        {/* Center line (horizontal, each half) */}
        <line x1={cx - hw} y1={cy} x2={cx - kitchen} y2={cy} />
        <line x1={cx + hw} y1={cy} x2={cx + kitchen} y2={cy} />
      </g>
    );
  }

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} strokeWidth={2.5} />
      <line x1={cx - hw} y1={cy - kitchen} x2={cx + hw} y2={cy - kitchen} strokeDasharray="4 2" />
      <line x1={cx - hw} y1={cy + kitchen} x2={cx + hw} y2={cy + kitchen} strokeDasharray="4 2" />
      <line x1={cx} y1={cy - hl} x2={cx} y2={cy - kitchen} />
      <line x1={cx} y1={cy + hl} x2={cx} y2={cy + kitchen} />
    </g>
  );
}

/* ─── Basketball Court Lines (NFHS / High School standard) ─── */
function BasketballLines({ s, offX, offY, courtW, courtL, totalW, totalL, lineColor, isHalf, rotated }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  const hw = (courtW * s) / 2;
  const hl = (courtL * s) / 2;
  const sw = 1.5;

  // Use the `rotated` prop to determine orientation — courtW > courtL
  // is unreliable for half-court where dimensions are close
  const isHorizontalLong = rotated;

  // NFHS (High School) dimensions in feet
  const KEY_W = 12;        // lane width (12' HS, not 16' NBA)
  const KEY_DEPTH = 19;    // baseline to free throw line
  const FT_R = 6;          // free throw circle radius
  const THREE_R = 19.75;   // 3-point arc radius from hoop center (19'9" HS)
  const HOOP_DIST = 5.25;  // hoop center from baseline
  const HOOP_R = 0.75;     // hoop rim radius
  const BB_OFFSET = 4;     // backboard offset from baseline
  const BB_W = 3;          // backboard half-width
  const CENTER_R = 6;      // center circle radius

  if (isHorizontalLong) {
    // LANDSCAPE: long side is horizontal, baselines are LEFT and RIGHT

    const drawEnd = (baseX: number, dir: number) => {
      const hoopX = baseX + HOOP_DIST * s * dir;
      const ftX = baseX + KEY_DEPTH * s * dir;
      const keyX = dir > 0 ? baseX : baseX - KEY_DEPTH * s;

      // 3-point arc: NFHS arc centered on hoop, intersecting baseline
      const threeR = THREE_R * s;
      const hoopToBase = HOOP_DIST * s; // horizontal distance from hoop to baseline
      // Where the 3pt circle (centered on hoop) intersects the baseline (vertical line at baseX)
      const arcIntersectDy = Math.sqrt(Math.max(0, threeR ** 2 - hoopToBase ** 2));
      // Clamp to sideline if needed
      const sidelineDist = hl;
      const arcDy = Math.min(arcIntersectDy, sidelineDist);

      return (
        <g>
          {/* Key / lane */}
          <rect x={keyX} y={cy - (KEY_W / 2) * s} width={KEY_DEPTH * s} height={KEY_W * s} />
          {/* Free throw circle */}
          <circle cx={ftX} cy={cy} r={FT_R * s} />
          {/* Backboard + hoop drawn by NetOverlay (orange) */}
          {/* 3-point line: semicircle arc + straight corner lines to baseline */}
          {(() => {
            // Arc endpoints at top/bottom of circle (above/below hoop at hoop's x)
            const arcTopY = cy - threeR;
            const arcBotY = cy + threeR;
            // Semicircle from top to bottom, curving away from baseline (into court)
            const sweep = dir > 0 ? 1 : 0;
            return (
              <>
                <path d={`M ${hoopX} ${arcTopY} A ${threeR} ${threeR} 0 0 ${sweep} ${hoopX} ${arcBotY}`} />
                {/* Straight corner lines from arc endpoints to baseline */}
                <line x1={hoopX} y1={arcTopY} x2={baseX} y2={arcTopY} />
                <line x1={hoopX} y1={arcBotY} x2={baseX} y2={arcBotY} />
              </>
            );
          })()}
        </g>
      );
    };

    return (
      <g stroke={lineColor} strokeWidth={sw} fill="none">
        <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
        {!isHalf && (
          <>
            <line x1={cx} y1={cy - hl} x2={cx} y2={cy + hl} />
            <circle cx={cx} cy={cy} r={CENTER_R * s} />
            {drawEnd(cx - hw, 1)}
            {drawEnd(cx + hw, -1)}
          </>
        )}
        {isHalf && (
          <>
            <line x1={cx - hw} y1={cy - hl} x2={cx - hw} y2={cy + hl} strokeWidth={2} />
            <path d={`M ${cx - hw} ${cy - CENTER_R * s} A ${CENTER_R * s} ${CENTER_R * s} 0 0 1 ${cx - hw} ${cy + CENTER_R * s}`} />
            {drawEnd(cx + hw, -1)}
          </>
        )}
      </g>
    );
  }

  // PORTRAIT: long side is vertical, baselines are TOP and BOTTOM

  const drawEndV = (baseY: number, dir: number) => {
    const hoopY = baseY + HOOP_DIST * s * dir;
    const ftY = baseY + KEY_DEPTH * s * dir;
    const keyY = dir > 0 ? baseY : baseY - KEY_DEPTH * s;

    const threeR = THREE_R * s;
    const hoopToBase = HOOP_DIST * s;
    // Where 3pt circle (centered on hoop) intersects the baseline (horizontal line at baseY)
    const arcIntersectDx = Math.sqrt(Math.max(0, threeR ** 2 - hoopToBase ** 2));
    const sidelineDist = hw;
    const arcDx = Math.min(arcIntersectDx, sidelineDist);

    return (
      <g>
        {/* Key / lane */}
        <rect x={cx - (KEY_W / 2) * s} y={keyY} width={KEY_W * s} height={KEY_DEPTH * s} />
        {/* Free throw circle */}
        <circle cx={cx} cy={ftY} r={FT_R * s} />
        {/* Backboard + hoop drawn by NetOverlay (orange) */}
        {/* 3-point line: semicircle arc + straight corner lines to baseline */}
        {(() => {
          // Arc endpoints at widest point of circle (left/right of hoop at hoop's y)
          const arcLeftX = cx - threeR;
          const arcRightX = cx + threeR;
          // Semicircle from left to right, curving away from baseline (into court)
          const sweep = dir > 0 ? 0 : 1;
          return (
            <>
              <path d={`M ${arcLeftX} ${hoopY} A ${threeR} ${threeR} 0 0 ${sweep} ${arcRightX} ${hoopY}`} />
              {/* Straight corner lines from arc endpoints to baseline */}
              <line x1={arcLeftX} y1={hoopY} x2={arcLeftX} y2={baseY} />
              <line x1={arcRightX} y1={hoopY} x2={arcRightX} y2={baseY} />
            </>
          );
        })()}
      </g>
    );
  };

  return (
    <g stroke={lineColor} strokeWidth={sw} fill="none">
      <rect x={cx - hw} y={cy - hl} width={hw * 2} height={hl * 2} />
      {!isHalf && (
        <>
          <line x1={cx - hw} y1={cy} x2={cx + hw} y2={cy} />
          <circle cx={cx} cy={cy} r={CENTER_R * s} />
          {drawEndV(cy - hl, 1)}
          {drawEndV(cy + hl, -1)}
        </>
      )}
      {isHalf && (
        <>
          <line x1={cx - hw} y1={cy - hl} x2={cx + hw} y2={cy - hl} strokeWidth={2} />
          <path d={`M ${cx - CENTER_R * s} ${cy - hl} A ${CENTER_R * s} ${CENTER_R * s} 0 0 0 ${cx + CENTER_R * s} ${cy - hl}`} />
          {drawEndV(cy + hl, -1)}
        </>
      )}
    </g>
  );
}

/* ─── Multi-Sport Lines (Tennis + Pickleball overlay) ─── */
function MultiSportLines(props: any) {
  const tW = props.rotated ? 78 : 36;
  const tL = props.rotated ? 36 : 78;
  const pW = props.rotated ? 44 : 20;
  const pL = props.rotated ? 20 : 44;
  return (
    <>
      <TennisLines {...props} courtW={tW} courtL={tL} />
      <PickleballLines {...props} courtW={pW} courtL={pL} />
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

function NetOverlay({ s, offX, offY, totalW, totalL, sport, rotated }: any) {
  const cx = offX + (totalW * s) / 2;
  const cy = offY + (totalL * s) / 2;
  if (sport === 'basketball' || sport === 'basketball-half') {
    // Court dimensions for hoop placement (NFHS: 5.25' from baseline)
    const courtW = sport === 'basketball-half' ? 50 : 50;
    const courtL = sport === 'basketball-half' ? 42 : 84;
    const renderCourtW = rotated ? courtL : courtW;
    const renderCourtL = rotated ? courtW : courtL;
    const courtX = offX + ((totalW - renderCourtW) * s) / 2;
    const courtY = offY + ((totalL - renderCourtL) * s) / 2;
    const hoopDist = 5.25 * s;
    const bbDist = 4 * s;   // backboard 4' from baseline
    const bbHalfW = 3 * s;  // backboard 6' wide (3' half-width)
    const isHalf = sport === 'basketball-half';
    if (rotated) {
      // Landscape: baselines are left and right
      const rightX = courtX + renderCourtW * s;
      const leftX = courtX;
      return (
        <g>
          {/* Right hoop */}
          <line x1={rightX - bbDist} y1={cy - bbHalfW} x2={rightX - bbDist} y2={cy + bbHalfW} stroke="#ffffff" strokeWidth={2.5} />
          <circle cx={rightX - hoopDist} cy={cy} r={6} fill="none" stroke="#f97316" strokeWidth={2} />
          {/* Left hoop (full court only) */}
          {!isHalf && <>
            <line x1={leftX + bbDist} y1={cy - bbHalfW} x2={leftX + bbDist} y2={cy + bbHalfW} stroke="#ffffff" strokeWidth={2.5} />
            <circle cx={leftX + hoopDist} cy={cy} r={6} fill="none" stroke="#f97316" strokeWidth={2} />
          </>}
        </g>
      );
    }
    // Portrait: baselines are top and bottom
    const bottomY = courtY + renderCourtL * s;
    const topY = courtY;
    return (
      <g>
        {/* Bottom hoop */}
        <line x1={cx - bbHalfW} y1={bottomY - bbDist} x2={cx + bbHalfW} y2={bottomY - bbDist} stroke="#ffffff" strokeWidth={2.5} />
        <circle cx={cx} cy={bottomY - hoopDist} r={6} fill="none" stroke="#f97316" strokeWidth={2} />
        {/* Top hoop (full court only) */}
        {!isHalf && <>
          <line x1={cx - bbHalfW} y1={topY + bbDist} x2={cx + bbHalfW} y2={topY + bbDist} stroke="#ffffff" strokeWidth={2.5} />
          <circle cx={cx} cy={topY + hoopDist} r={6} fill="none" stroke="#f97316" strokeWidth={2} />
        </>}
      </g>
    );
  }
  // Net for tennis/pickleball
  if (rotated) {
    // Landscape: net is vertical at center
    return (
      <g>
        <line x1={cx} y1={offY + 10} x2={cx} y2={offY + totalL * s - 10} stroke="#f97316" strokeWidth={3} opacity={0.6} />
        <text x={cx + 8} y={cy} textAnchor="start" fill="#f97316" fontSize="7">NET</text>
      </g>
    );
  }
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
  const [expandedSwatch, setExpandedSwatch] = useState<string | null>('Playing Area');
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

  // SVG dimensions — landscape orientation
  const SVG_W = 700;
  const SVG_H = 400;
  // Landscape: always render longer side horizontally
  const isRotated = length > width;
  const renderW = isRotated ? length : width;
  const renderH = isRotated ? width : length;
  const { s, offX, offY } = useMemo(() => scaleFactory(renderW, renderH, SVG_W, SVG_H), [renderW, renderH]);

  // When rotated, swap court dimensions too so lines draw horizontally
  const renderCourtW = isRotated ? config.courtL : config.courtW;
  const renderCourtL = isRotated ? config.courtW : config.courtL;
  const lineProps = { s, offX, offY, courtW: renderCourtW, courtL: renderCourtL, totalW: renderW, totalL: renderH, lineColor, rotated: isRotated };

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
              <div className="mb-3 flex items-center gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">Colors <span className="lowercase font-normal">by</span></h2>
                <Link href="/acrytech" className="opacity-70 hover:opacity-100 transition-opacity">
                  <img src="/logos/acrytech-logo-white.png" alt="Acrytech" className="h-5 w-auto" />
                </Link>
              </div>
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
                { label: 'Playing Area', value: playColor, set: (v: string) => { setPlayColor(v); setPaletteIdx(PALETTES.length - 1); } },
                { label: 'Surround', value: surroundColor, set: (v: string) => { setSurroundColor(v); setPaletteIdx(PALETTES.length - 1); } },
                { label: 'Lines', value: lineColor, set: (v: string) => { setLineColor(v); setPaletteIdx(PALETTES.length - 1); } },
              ].map((c) => (
                <div key={c.label} className="mb-3">
                  <div
                    className="flex items-center justify-between mb-1.5 cursor-pointer"
                    onClick={() => setExpandedSwatch(expandedSwatch === c.label ? null : c.label)}
                  >
                    <span className="text-sm text-text-secondary">{c.label}</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={c.value}
                        onChange={(e) => c.set(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="h-8 w-8 cursor-pointer rounded border border-border bg-transparent"
                      />
                      <span className="w-16 font-mono text-xs text-text-secondary">{c.value}</span>
                    </div>
                  </div>
                  {/* Acrytech color swatches — expand on click */}
                  {expandedSwatch === c.label && <div className="flex flex-wrap gap-1">
                    {ACRYTECH_COLORS.map((ac) => (
                      <button
                        key={ac.name}
                        title={ac.name}
                        onClick={() => c.set(ac.hex)}
                        className={`h-5 w-5 rounded-sm border transition-all hover:scale-110 ${
                          c.value === ac.hex ? 'border-neon ring-1 ring-neon' : 'border-border/50'
                        }`}
                        style={{ backgroundColor: ac.hex }}
                      />
                    ))}
                  </div>}
                </div>
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
                    width={renderW * s}
                    height={renderH * s}
                    fill={surroundColor}
                    rx={3}
                  />

                  {/* Playing area */}
                  <rect
                    x={offX + ((renderW - renderCourtW) * s) / 2}
                    y={offY + ((renderH - renderCourtL) * s) / 2}
                    width={renderCourtW * s}
                    height={renderCourtL * s}
                    fill={playColor}
                  />

                  {/* Court lines */}
                  {sport === 'tennis' && <TennisLines {...lineProps} />}
                  {sport === 'pickleball' && <PickleballLines {...lineProps} />}
                  {sport === 'basketball' && <BasketballLines {...lineProps} isHalf={false} rotated={isRotated} />}
                  {sport === 'basketball-half' && <BasketballLines {...lineProps} isHalf={true} rotated={isRotated} />}
                  {sport === 'multi-sport' && <MultiSportLines {...lineProps} />}

                  {/* Extras */}
                  {fencing && <FencingOverlay s={s} offX={offX} offY={offY} totalW={renderW} totalL={renderH} />}
                  {lighting && <LightingOverlay s={s} offX={offX} offY={offY} totalW={renderW} totalL={renderH} />}
                  {netHoop && <NetOverlay s={s} offX={offX} offY={offY} totalW={renderW} totalL={renderH} sport={sport} rotated={isRotated} />}

                  {/* Dimension labels */}
                  <text x={offX + (renderW * s) / 2} y={offY + renderH * s + 16} textAnchor="middle" fill="#666" fontSize="11" fontFamily="monospace">
                    {renderW}&apos;
                  </text>
                  <text x={offX - 10} y={offY + (renderH * s) / 2} textAnchor="middle" fill="#666" fontSize="11" fontFamily="monospace" transform={`rotate(-90, ${offX - 10}, ${offY + (renderH * s) / 2})`}>
                    {renderH}&apos;
                  </text>
                </svg>
              </div>
            </div>

            {/* Two-column: Extras + Estimated Cost */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Extras */}
              <div className="rounded-xl border border-border bg-surface-card p-5">
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
