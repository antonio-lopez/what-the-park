/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: ["res.cloudinary.com", "www.nps.gov"],
  },
};

module.exports = nextConfig;
