/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
}

module.exports = nextConfig
