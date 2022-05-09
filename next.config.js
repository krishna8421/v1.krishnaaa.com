/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },
    experimental: {
        outputStandalone: true
    }
    // pwa: {
    //     dest: 'public',
    //     runtimeCaching
    // },
}

// module.exports = withPWA(nextConfig)
module.exports = (nextConfig)