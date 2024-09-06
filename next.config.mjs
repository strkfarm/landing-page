/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/r/:path*',
            destination: 'https://app.strkfarm.xyz/r/:path*',
            permanent: true,
          },
          {
            source: '/slinks',
            destination: 'https://app.strkfarm.xyz/slinks',
            permanent: true,
          },
          {
            source: '/strategy/:path*',
            destination: 'https://app.strkfarm.xyz/strategy/:path*',
            permanent: true,
          },
          {
            source: '/eth',
            destination: 'https://app.strkfarm.xyz/eth',
            permanent: true,
          },
          {
            source: '/strk',
            destination: 'https://app.strkfarm.xyz/strk',
            permanent: true,
          },
          {
            source: '/usdc',
            destination: 'https://app.strkfarm.xyz/usdc',
            permanent: true,
          },
        ];
      },
};

export default nextConfig;
