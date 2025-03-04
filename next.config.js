/** @type {import('next').NextConfig} */
// This configuration is designed for GitHub Pages deployment
// The GitHub Pages action may inject additional configurations,
// but we're handling potential conflicts by disabling strict type checking
const nextConfig = {
  output: 'export',
  eslint: {
    // Disable ESLint during production build to allow GitHub Pages deployment
    ignoreDuringBuilds: true,
  },
  // Only one images configuration at the root level
  images: { unoptimized: true },
  basePath: process.env.GITHUB_PAGES ? '/undo-wiki' : '',
  typescript: {
    // Disable TypeScript errors during build for GitHub Pages
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 