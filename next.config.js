// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'via.placeholder.com',
      'cms-perpus.karuhundeveloper.com', // <-- PASTIKAN INI ADA
    ],
  },
};

module.exports = nextConfig;