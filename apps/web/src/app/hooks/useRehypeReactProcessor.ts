import { createElement, Fragment, useEffect, useState } from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { useRehypeToc } from './useRehypeToc';
import React from 'react';

export function useRehypeReactProcessor(text: string, toc: boolean) {
  const [key, setKey] = useState(0);
  const [Content, setContent] = useState(
    React.createElement('div', {
      dangerouslySetInnerHTML: {
        __html: text,
      },
    })
  );
  const { tocOptions, tocParent, rehypeToc, rehypeSlug } = useRehypeToc(
    toc,
    key
  );

  useEffect(() => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment });
    if (toc) {
      processor.use(rehypeSlug).use(rehypeToc, tocOptions);
    }
    processor.process(text).then((file) => {
      setContent(file.result as any);
      setTimeout(() => setKey((s) => s + 1), 0);
    });
  }, [text, toc]);

  return { Content, tocParent };
}
