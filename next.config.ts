/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // if using external images
  },
  experimental: {
    // appDir: true,  // already enabled by default in new projects
  },
}

module.exports = nextConfig