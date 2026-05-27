import type { Metadata } from 'next';
import { Press_Start_2P, Pixelify_Sans, Inter, JetBrains_Mono, Silkscreen } from 'next/font/google';
import './globals.css';

const pressStart = Press_Start_2P({ weight: '400', subsets: ['latin'], display: 'swap' });
const pixelifySans = Pixelify_Sans({ weight: ['500', '600', '700'], subsets: ['latin'], display: 'swap' });
const inter = Inter({ weight: ['400', '500', '600', '700'], subsets: ['latin'], display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });
const silkscreen = Silkscreen({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'The Byte Times · daily AI news',
  description: 'Daily dispatches from the AI grid. One scroll, one cup of coffee.',
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
