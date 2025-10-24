/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  // Deshabilitar optimizaciones que no funcionan con export estático
  swcMinify: false,
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig
