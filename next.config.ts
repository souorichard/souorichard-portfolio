import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'og-image.vercel.app',
      },
    ],
  },
}

export default nextConfig
