// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')
// const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    outputStandalone: true,
  },
  // pwa: {
  //     dest: 'public',
  //     runtimeCaching
  // },
};

// module.exports = withPWA(nextConfig)
// module.exports = withContentlayer(nextConfig)
module.exports = nextConfig;
