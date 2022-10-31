/* eslint-disable */
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';

const code: keyof JSX.IntrinsicElements | CodeComponent = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, '')}
      style={atomDark as any}
      language={match[1]}
      PreTag='div'
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export function MarkdownContent({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        code,
      }}
      remarkPlugins={[remarkBreaks, remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}
