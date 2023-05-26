/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['firebasestorage.googleapis.com', 'www.freeiconspng.com'] },
  experimental: {
    swcFileReading: false
  }
}

module.exports = nextConfig
