import { ImageResponse } from 'next/og';

export const alt = 'The Byte Times — daily AI news';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0e1426',
          display: 'flex',
          flexDirection: 'column',
          padding: 80,
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* scanline overlay hint */}
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)' }} />

        {/* brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 60 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: '#7adfe8',
              border: '3px solid #ebe7f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 900,
              color: '#0e1426',
            }}
          >
            BT
          </div>
          <span style={{ fontSize: 28, fontWeight: 900, color: '#ebe7f5', letterSpacing: 4 }}>
            BYTE<span style={{ color: '#7adfe8' }}>.</span>TIMES
          </span>
        </div>

        {/* headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#ebe7f5',
            lineHeight: 1.1,
            maxWidth: 900,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Daily dispatches from the AI grid
        </div>

        {/* kicker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 40 }}>
          <div style={{ width: 10, height: 10, background: '#7adfe8' }} />
          <span style={{ color: '#7adfe8', fontSize: 18, letterSpacing: 6, textTransform: 'uppercase' }}>
            AI · LLM · Agents · MCP · RAG · Code · Browser
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
