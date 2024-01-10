

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "ik.imagekit.io",
          },
        ],
      }
      // ,
      // experimental: {
      //   optimizePackageImports: ['@nextui-org/react','framer-motion','tailwindcss'],
      //   optimizeCss: true 
      // }
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
