import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export function MarkdownContent({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkBreaks, remarkGfm]}>
      {children}
    </ReactMarkdown>
  );
}
