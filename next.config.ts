import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aaa.bbb.com',
      },
    ],
  },
};

export default nextConfig;
