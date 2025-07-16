import VideoEmbed from './components/mdx/VideoEmbed';
import NewsletterForm from './components/mdx/NewsletterForm';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    VideoEmbed,
    NewsletterForm,
    ...components,
  };
}
