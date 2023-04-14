import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';

import { FiCopy, FiCheck } from 'react-icons/fi';

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
        children={codeText}
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
  );
}
