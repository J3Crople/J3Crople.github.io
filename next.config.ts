/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  // basePath and assetPrefix only if using a GitHub repo subpath
  // basePath: '/my-portfolio',
  // assetPrefix: '/my-portfolio/',
};

module.exports = nextConfig;
