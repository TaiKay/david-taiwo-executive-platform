import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });
export default withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'], deviceSizes: [360, 640, 750, 1080, 1440, 1920], imageSizes: [48, 96, 160, 256] },
  async headers() { return [{ source: '/:path*', headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'X-Frame-Options', value: 'DENY' }, { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }, { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }] }]; },
});
