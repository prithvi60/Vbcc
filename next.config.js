/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://snap.licdn.com https://salesiq.zohopublic.in;
  //             img-src 'self' data: https://px.ads.linkedin.com https://salesiq.zohopublic.in;
  //             style-src 'self' 'unsafe-inline';
  //             frame-src 'self' https://salesiq.zohopublic.in;
  //           `.replace(/\s{2,}/g, " "),
  //         },
  //       ],
  //     },
  //   ];
  // },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer(nextConfig);
