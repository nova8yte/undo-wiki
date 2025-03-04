/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://undo.wiki' : '',
};

export default nextConfig; 