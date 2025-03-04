/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/undowiki' : '',
  assetPrefix: isProd ? 'https://undo.wiki' : (isGithubPages ? '/undowiki' : ''),
  images: { unoptimized: true },
};

export default nextConfig; 