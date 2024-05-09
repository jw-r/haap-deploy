/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.chimhaha.net',
        port: '',
      },
    ],
  },
}

export default nextConfig
