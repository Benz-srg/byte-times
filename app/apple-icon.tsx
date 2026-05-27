import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0e1426',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            background: '#7adfe8',
            border: '6px solid #ebe7f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            fontSize: 48,
            fontWeight: 900,
            color: '#0e1426',
            letterSpacing: '-2px',
          }}
        >
          BT
        </div>
      </div>
    ),
    { ...size }
  );
}
