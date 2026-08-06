import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: ({ children }) => <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-6xl">{children}</h1>,
  h2: ({ children }) => <h2 className="mt-12 font-display text-3xl font-semibold tracking-tight text-navy">{children}</h2>,
  p: ({ children }) => <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{children}</p>,
  a: ({ children, href }) => <a className="focus-ring font-semibold text-royal underline decoration-gold underline-offset-4" href={href}>{children}</a>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
