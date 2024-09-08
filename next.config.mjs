/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.chimhaha.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'zrr.kr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
