'use client';
export function PrintActions({ label = 'Print or save as PDF' }: { label?: string }) { return <button type="button" onClick={() => window.print()} className="focus-ring rounded-full border border-navy px-5 py-3 font-semibold text-navy hover:bg-navy hover:text-white print:hidden">{label}</button>; }
