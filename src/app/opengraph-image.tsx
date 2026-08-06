import { ImageResponse } from 'next/og';

export const alt = 'David Taiwo — Leadership, Innovation, Legacy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#071B3A', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', fontSize: 22, color: '#C8A45D', letterSpacing: 4 }}>DAVID TAIWO</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
        <span>Leadership</span>
        <span>Innovation</span>
        <span style={{ color: '#C8A45D' }}>Legacy</span>
      </div>
      <div style={{ display: 'flex', fontSize: 24, color: '#CBD5E1' }}>Senior Banking Operations & Enterprise Payments Executive</div>
    </div>,
    size,
  );
}

