import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });
export default withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'], deviceSizes: [360, 640, 750, 1080, 1440, 1920], imageSizes: [48, 96, 160, 256] },
});
