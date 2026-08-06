'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) { const reduced = useReducedMotion(); return <motion.div initial={{ opacity: 0, y: reduced ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: reduced ? 0 : .42, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>; }
