/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Muchowsky Registry',
    description: 'Muchowsky\'s Kasm supported workspaces.',
    icon: 'https://avatars.githubusercontent.com/u/36521001?s=400&u=58ed1f606984f17dcb6a63e6dee2599b17edb00a&v=4',
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
