/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Muchowsky Registry',
    description: 'Muchowsky\'s Kasm supported workspaces.',
    icon: 'https://muchowsky.github.io/kasm_workspaces_registry/1.1/image.png',
    listUrl: 'https://muchowsky.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://github.com/muchowsky/kasm_workspaces_registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
