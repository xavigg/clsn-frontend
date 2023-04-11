/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['sharecomputacion.com', 'cdn.smart-gsm.com'],
  },
}

module.exports = nextConfig
