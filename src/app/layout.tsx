import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
export const metadata: Metadata = { title: { default: 'David Taiwo | Executive Legacy Platform', template: '%s | David Taiwo' }, description: 'Senior Banking Operations & Enterprise Payments Executive. Leadership, innovation and legacy.', metadataBase: new URL('https://davidtaiwo.com'), openGraph: { type: 'website', siteName: 'David Taiwo Executive Legacy Platform' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${space.variable}`}><body><a href="#main" className="focus-ring sr-only fixed left-4 top-4 z-[100] bg-navy px-4 py-2 text-white focus:not-sr-only">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /><Analytics /></body></html>; }
