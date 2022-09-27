/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    domains: ['firebasestorage.googleapis.com'],
    dangerouslyAllowSVG:true 
  },
}

module.exports = nextConfig
