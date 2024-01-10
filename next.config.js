/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "ik.imagekit.io",
          },
        ],
      },
      experimental: {
        optimizePackageImports: ['@nextui-org/react','framer-motion','tailwindcss'],
        optimizeCss: true 
      }
}

module.exports = nextConfig
