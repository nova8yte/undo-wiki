/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES ? '/undo-wiki' : '',
  images: { unoptimized: true },
  // Remove images from experimental section
}

module.exports = nextConfig 