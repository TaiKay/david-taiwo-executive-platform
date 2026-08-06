import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Analytics } from '@vercel/analytics/next';
import { StructuredData } from '@/components/structured-data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
export const metadata: Metadata = { title: { default: 'David Taiwo | Executive Legacy Platform', template: '%s | David Taiwo' }, description: 'Senior Banking Operations & Enterprise Payments Executive. Leadership, innovation and legacy.', metadataBase: new URL('https://davidtaiwo.com'), openGraph: { type: 'website', siteName: 'David Taiwo Executive Legacy Platform', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'David Taiwo — Leadership, Innovation, Legacy' }] }, twitter: { card: 'summary_large_image', title: 'David Taiwo | Executive Legacy Platform', description: 'Leadership, innovation and legacy.' } };
const identity = [{ '@context': 'https://schema.org', '@type': 'Person', name: 'David Taiwo', url: 'https://davidtaiwo.com', jobTitle: 'Senior Banking Operations & Enterprise Payments Executive', worksFor: { '@type': 'Organization', name: 'David Taiwo Executive Legacy Platform' } }, { '@context': 'https://schema.org', '@type': 'Organization', name: 'David Taiwo Executive Legacy Platform', url: 'https://davidtaiwo.com', founder: { '@type': 'Person', name: 'David Taiwo' } }, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'David Taiwo Executive Legacy Platform', url: 'https://davidtaiwo.com', inLanguage: 'en' }];
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${space.variable}`}><body><StructuredData data={identity}/><a href="#main" className="focus-ring sr-only fixed left-4 top-4 z-[100] bg-navy px-4 py-2 text-white focus:not-sr-only">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /><Analytics /></body></html>; }
