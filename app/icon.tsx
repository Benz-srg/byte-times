import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#7adfe8',
          border: '2px solid #0e1426',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: 10,
          fontWeight: 900,
          color: '#0e1426',
          letterSpacing: '-0.5px',
          boxShadow: '2px 2px 0 #0e1426',
        }}
      >
        BT
      </div>
    ),
    { ...size }
  );
}
