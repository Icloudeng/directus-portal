/* eslint-disable */
import tocCss from './toc.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import remarkToc, { Options } from 'remark-toc';
// import toc from '@jsdevtools/rehype-toc';

type Props = {
  children: string;
  toc?: boolean;
  toc_parent?: string;
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

export function MarkdownContent({ children, toc = false, toc_parent }: Props) {
  const $toc = toc
    ? [
        [
          remarkToc,
          {
            parents: toc_parent,
          } as Options,
        ],
      ]
    : ([] as any);
  return (
    <div className={tocCss.table_of_content}>
      <div className={tocCss.content__wrapper}>
        <ReactMarkdown
          components={{
            code: Code,
          }}
          remarkPlugins={[remarkGfm, remarkHtml, ...$toc]}
        >
          {children}
        </ReactMarkdown>
      </div>
    </div>
  );
}
