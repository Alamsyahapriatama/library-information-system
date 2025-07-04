// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'via.placeholder.com',
      'cms-perpus.karuhundeveloper.com',
      'perpus.karuhundeveloper.com', 
      'library-information-system.vercel.app'
    ],
    
  },
  output: 'export', 
};

module.exports = nextConfig;