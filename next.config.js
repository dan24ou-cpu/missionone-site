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
  async redirects() {
    return [
      // Legacy WordPress URLs -> new Next.js site
      { source: '/mission-one-game-on', destination: '/podcast', permanent: true },
      { source: '/mission-one-game-on/:path*', destination: '/podcast', permanent: true },
      { source: '/about-us', destination: '/', permanent: true },
      { source: '/about-us/:path*', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/:path*', destination: '/', permanent: true },
      { source: '/how-we-work', destination: '/insights/how-to-hire-executive-leaders', permanent: true },
      { source: '/how-we-work/:path*', destination: '/insights/how-to-hire-executive-leaders', permanent: true },
      // Old dated blog post URLs
      { source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
