/* eslint-disable */
// import tocCss from './toc.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useRehypeToc } from '@/app/hooks/useRehypeToc';

type Props = {
  children: string;
  toc?: boolean;
  className?: string;
};

const Code: keyof JSX.IntrinsicElements | CodeComponent = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState(false);
  const codeText = String(children).replace(/\n$/, '');

  useEffect(() => {
    setCopied(false);
  }, [codeText]);

  return !inline && match ? (
    <div className='relative'>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={atomDark as any}
        language={match[1]}
        PreTag='div'
        {...props}
      />
      <CopyToClipboard
        text={codeText}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        <button className='absolute top-3 text-white right-5'>
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </CopyToClipboard>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export function MarkdownContent({ children, toc = false, className }: Props) {
  const { tocParent, tocOptions, rehypeToc, rehypeSlug } = useRehypeToc(toc);

  return (
    <div className={`w-full ${toc ? 'lg:flex' : ''} ${className || ''}`}>
      {toc && (
        <div className='lg:w-[30%] lg:mt-10'>
          <div
            className='lg:sticky lg:top-48 lg:max-h-[80vh] lg:mr-4 lg:text-lg overflow-auto '
            ref={tocParent}
          />
        </div>
      )}
      <div className={`${toc ? 'lg:w-[70%]' : ''}`}>
        <ReactMarkdown
          components={{
            code: Code,
          }}
          rehypePlugins={
            toc ? [rehypeSlug, [rehypeToc as any, tocOptions]] : []
          }
          //@ts-ignore
          remarkPlugins={[remarkGfm, remarkHtml]}
        >
          {children}
        </ReactMarkdown>
      </div>
    </div>
  );
}
