import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Byte Times',
    short_name: 'Byte Times',
    description: 'Daily dispatches from the AI grid — 8-bit AI news board',
    start_url: '/',
    display: 'standalone',
    background_color: '#0e1426',
    theme_color: '#7adfe8',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
