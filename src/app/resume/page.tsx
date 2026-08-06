import { CareerTimeline } from '@/components/career-timeline';
import { PageHero } from '@/components/page-hero';
export default function Resume() { return <><PageHero label="Career timeline" title="Experience that compounds." text="An interactive view of an executive career across operations, enterprise payments, transformation and innovation."/><section className="section"><p className="eyebrow">Explore the journey</p><h2 className="font-display text-3xl font-semibold text-navy">Choose a chapter to reveal the work.</h2><CareerTimeline /></section></>; }
