/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Remove basePath if you're using a custom domain
    // basePath: '/glimpz-landing', 
    assetPrefix: '/', // This ensures assets are loaded from the root
  }
  
  module.exports = nextConfig