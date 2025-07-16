import VideoEmbed from './components/mdx/VideoEmbed';
import NewsletterForm from './components/mdx/NewsletterForm';
import type { MDXComponents } from 'mdx/types';
import React from 'react';

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const text = typeof props.children === 'string' ? props.children : '';
  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return <h2 id={id} {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    VideoEmbed,
    NewsletterForm,
    h2: H2,
    ...components,
  };
}
