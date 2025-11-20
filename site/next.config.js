/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Muchowsky Registry',
    description: 'Muchowsky\'s Kasm supported workspaces.',
    icon: 'https://muchowsky.github.io/workspaces_registry_template/1.1/image.png',
    listUrl: 'https://muchowsky.github.io/workspaces_registry_template/',
    contactUrl: 'https://github.com/muchowsky/workspaces_registry_template/issues',
  },
  reactStrictMode: true,
  basePath: '/workspaces_registry_template/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
