import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'svgl.app', pathname: '/library/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'icons.duckduckgo.com' },
    ],
  },
};

export default nextConfig;
