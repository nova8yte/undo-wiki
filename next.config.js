/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // Disable ESLint during production build to allow GitHub Pages deployment
    ignoreDuringBuilds: true,
  },
  basePath: process.env.GITHUB_PAGES ? '/undo-wiki' : '',
  images: { unoptimized: true },
  // Remove images from experimental section
}

module.exports = nextConfig 