import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BestSportsSurfaces.com - Find Sports Surface Contractors Near You';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3a5a40 0%, #2d4a33 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: 64 }}>🏟️</span>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#ecebe4',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          BestSportsSurfaces.com
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#ecebe4',
            opacity: 0.85,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Find Trusted Sports Surface Contractors Near You
        </div>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '40px',
            fontSize: 20,
            color: '#ecebe4',
            opacity: 0.7,
          }}
        >
          <span>🎾 Tennis</span>
          <span>🏀 Basketball</span>
          <span>🏓 Pickleball</span>
          <span>⚽ Soccer</span>
          <span>🏃 Track</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
