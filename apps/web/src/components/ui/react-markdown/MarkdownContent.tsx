/* eslint-disable */
// import tocCss from './toc.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useId, useRef, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import rehypeToc, {
  HtmlElementNode,
  ListItemNode,
  Options,
} from '@jsdevtools/rehype-toc';
import type { Node } from 'unist';
import { dbSafe } from '@/app/utils/db-safe';
import { scrollToElement } from '@/app/utils/scroll-to-element';

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

function customizeTOCItem(node: ListItemNode, heading: HtmlElementNode) {
  if (!heading.children || heading.children.length === 0) return true;
  const children = heading.children!;
  const extactText = (node: Node) =>
    node.type === 'text' ? (node as any).value || '' : '';

  const safeText = dbSafe(children.map(extactText).join('-'));

  const linkModifier = (link: HtmlElementNode) => {
    if (link.type === 'element' && link.tagName === 'a') {
      link.properties['href'] = '#' + safeText;
    }
    link.children?.forEach(linkModifier as any);
  };

  node.children.forEach(linkModifier as any);
  heading.properties['id'] = safeText;

  return node;
}

function useMarkdownToc(toc: boolean) {
  const id = useId();
  const tocParent = useRef<HTMLDivElement | null>(null);
  const tocOptions: Options = {
    customizeTOC: (node) => {
      //@ts-ignore
      node.properties['hidden'] = true;
      node.properties['id'] = id;
      return node;
    },
    customizeTOCItem,
  };

  useEffect(() => {
    if (!toc) return;
    const navToc = document.getElementById(id);
    if (!navToc) return;
    const links = Array.from(navToc.querySelectorAll('a'));

    const onAnchorClick = (event: MouseEvent) => {
      event.preventDefault();
      const el = event.currentTarget as HTMLAnchorElement;
      const href = el.href.substring(el.href.indexOf('#'));
      const headingEl = document.querySelector(href);
      if (!headingEl) return;

      const rect = headingEl.getBoundingClientRect();
      scrollToElement(rect);
    };

    links.forEach((el) => el.addEventListener('click', onAnchorClick));
    return () => {
      links.forEach((el) => el.removeEventListener('click', onAnchorClick));
    };
  }, [toc, id]);

  useEffect(() => {
    if (!toc || !tocParent.current) return;
    const navToc = document.getElementById(id);
    if (navToc) {
      tocParent.current.appendChild(navToc);
      navToc.removeAttribute('hidden');
    }
  }, [toc, id]);

  return { tocOptions, tocParent };
}

export function MarkdownContent({ children, toc = false, className }: Props) {
  const { tocParent, tocOptions } = useMarkdownToc(toc);

  return (
    <div className={`w-full ${toc ? 'lg:flex' : ''} ${className || ''}`}>
      {toc && (
        <div className='lg:w-[30%] lg:mt-10'>
          <div
            className='lg:sticky lg:top-48 lg:pr-4 lg:text-lg overflow-x-auto'
            ref={tocParent}
          />
        </div>
      )}
      <div className={`${toc ? 'lg:w-[70%]' : ''}`}>
        <ReactMarkdown
          components={{
            code: Code,
          }}
          rehypePlugins={toc ? [[rehypeToc, tocOptions]] : []}
          remarkPlugins={[remarkGfm, remarkHtml]}
        >
          {children}
        </ReactMarkdown>
      </div>
    </div>
  );
}
