import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Add your custom domain here
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://undo.wiki' : '',
};

export default nextConfig;
