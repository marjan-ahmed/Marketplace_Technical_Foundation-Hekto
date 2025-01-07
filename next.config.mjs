/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        remotePatterns: [
          {
            hostname: 'cdn.sanity.io',
            protocol: 'https'
          }
        ]
      }
};

export default nextConfig;