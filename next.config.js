// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'via.placeholder.com',
      'cms.perpustakaansditmadani.web.id',
      'perpustakaansditmadani.web.id'
    ],
    
  },
  output: 'export', 
};

module.exports = nextConfig;