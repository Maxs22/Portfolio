/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Solo usar export para builds de producción
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
    assetPrefix: '/Portfolio',
    basePath: '/Portfolio',
  }),
}

module.exports = nextConfig
