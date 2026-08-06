import { track } from '@vercel/analytics';
export function reportEngagement(event: string) { track(event); if (typeof window === 'undefined') return; window.gtag?.('event', event); window.clarity?.('event', event); }
declare global { interface Window { gtag?: (...args: unknown[]) => void; clarity?: (action: string, ...args: unknown[]) => void; } }
