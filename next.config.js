/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "unsplash.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
