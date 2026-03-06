/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'missionone.io',
      },
    ],
  },
};

module.exports = nextConfig;
