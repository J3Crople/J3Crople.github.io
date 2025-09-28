/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/J3crople.github.io/',
  images: {
    unoptimized: true,        // Avoids Next.js image optimization errors on static export
  },
};

module.exports = nextConfig;
