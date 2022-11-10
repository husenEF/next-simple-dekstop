/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
      },
    ],
  },
};

module.exports = nextConfig;
