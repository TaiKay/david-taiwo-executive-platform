'use client';
import Link from 'next/link';
import { reportEngagement } from '@/lib/analytics-events';
export function EngagementLink({ href, event, children, className }: { href: string; event: string; children: React.ReactNode; className?: string }) { return <Link href={href} className={className} onClick={() => reportEngagement(event)}>{children}</Link>; }
