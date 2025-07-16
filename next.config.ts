import nextMdx from '@next/mdx';
const withMDX = nextMdx({ extension: /\.mdx?$/ });

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'],
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
