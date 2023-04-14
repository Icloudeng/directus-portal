import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function Highlighter({
  codeText,
  match,
  props,
}: {
  codeText: string;
  props: any;
  match: RegExpExecArray;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [codeText]);

  return (
    <div className='relative'>
      <SyntaxHighlighter
        style={atomDark as any}
        language={match[1]}
        PreTag='div'
        {...props}
      >
        {codeText}
      </SyntaxHighlighter>
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
  );
}
