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
        optimizePackageImports: ["@nextui-org/system","@nextui-org/theme",'framer-motion',"@nextui-org/accordion",'tailwindcss',"@nextui-org/checkbox","@nextui-org/tooltip"],
        optimizeCss: true 
      }
}

module.exports = nextConfig
