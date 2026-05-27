import type { Metadata, Viewport } from 'next';
import { Press_Start_2P, Pixelify_Sans, Inter, JetBrains_Mono, Silkscreen } from 'next/font/google';
import './globals.css';

const pressStart = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const pixelifySans = Pixelify_Sans({ weight: ['500', '600', '700'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'], display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });
const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'], display: 'swap' });

const SITE_URL = 'https://byte-times.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The Byte Times · Daily AI News',
    template: '%s · The Byte Times',
  },
  description: 'Daily dispatches from the AI grid. One scroll, one cup of coffee. Covering LLMs, agents, MCP, RAG, AI coding, browser agents, and more.',
  keywords: ['AI news', 'LLM', 'Claude', 'GPT', 'agents', 'MCP', 'RAG', 'Cursor', 'AI coding', 'artificial intelligence'],
  authors: [{ name: 'The Byte Times' }],
  creator: 'Benz-srg',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'The Byte Times',
    title: 'The Byte Times · Daily AI News',
    description: 'Daily dispatches from the AI grid. One scroll, one cup of coffee.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'The Byte Times — daily AI news' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Byte Times · Daily AI News',
    description: 'Daily dispatches from the AI grid. One scroll, one cup of coffee.',
    images: ['/opengraph-image'],
    creator: '@benzsrg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0e1426' },
    { media: '(prefers-color-scheme: light)', color: '#f3eedf' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="night" data-accent="cyan" suppressHydrationWarning>
      <head>
        {/* Blocking script — prevents FOUC on theme/accent before first paint */}
        <script src="/theme-init.js" />
        <style>{`
          :root {
            --font-display: ${pressStart.style.fontFamily}, system-ui, monospace;
            --font-headline: ${pixelifySans.style.fontFamily}, system-ui, sans-serif;
            --font-body: ${inter.style.fontFamily}, system-ui, sans-serif;
            --font-mono: ${jetbrainsMono.style.fontFamily}, ui-monospace, monospace;
            --font-label: ${silkscreen.style.fontFamily}, monospace;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
