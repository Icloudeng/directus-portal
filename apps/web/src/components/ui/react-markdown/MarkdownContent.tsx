/* eslint-disable */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
  CodeComponent,
  ReactMarkdownProps,
} from 'react-markdown/lib/ast-to-react';

import {
  ComponentType,
  DetailedHTMLProps,
  HTMLAttributes,
  Suspense,
} from 'react';
import dynamic from 'next/dynamic';

import { useRehypeToc } from '@/app/hooks/useRehypeToc';
import clsxm from '@/lib/clsxm';
import { hasKroki } from './kroki-utils';
import { Highlighter } from './highlighter';

type Props = {
  children: string;
  toc?: boolean;
  className?: string;
};

const KrokiDiagram = dynamic(() => import('./Kroki'), { ssr: false });

// Code Component
const Code: keyof JSX.IntrinsicElements | CodeComponent = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const codeText = String(children).replace(/\n$/, '');
  const { isKroki, diagramType } = hasKroki(node);

  if (isKroki && codeText.trim()) {
    return (
      <Suspense fallback={`${diagramType} Diagram...`}>
        <KrokiDiagram type={diagramType as string} value={codeText} />
      </Suspense>
    );
  }

  // Code with Highlighter
  const match = /language-(\w+)/.exec(className || '');
  if (!inline && match) {
    return <Highlighter match={match} codeText={codeText} props={props} />;
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

// Pre Component
type PreComponent = ComponentType<
  Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
    'ref'
  > &
    ReactMarkdownProps
>;

const Pre: keyof JSX.IntrinsicElements | PreComponent = ({
  node,
  className,
  ...props
}) => {
  const withKrokiC = node.children.some((child) => {
    return child.type === 'element' ? hasKroki(child).isKroki : false;
  });

  return (
    <pre
      {...props}
      className={clsxm(
        className,
        withKrokiC && ['bg-transparent m-0 p-0 leading-none']
      )}
    />
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
            pre: Pre,
          }}
          rehypePlugins={
            toc ? [rehypeSlug, [rehypeToc as any, tocOptions]] : []
          }
          remarkPlugins={[remarkGfm]}
        >
          {children}
        </ReactMarkdown>
      </div>
    </div>
  );
}
