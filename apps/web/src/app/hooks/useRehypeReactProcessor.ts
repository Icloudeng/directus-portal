import { createElement, Fragment, useEffect, useRef, useState } from 'react';
import React from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';

import { useRehypeToc } from './useRehypeToc';

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

  const init = useRef((text: string, toc: boolean) => {
    const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment });
    if (toc) {
      processor.use(rehypeSlug).use(rehypeToc as any, tocOptions);
    }
    processor.process(text).then((file) => {
      setContent(file.result as any);
      setTimeout(() => setKey((s) => s + 1), 0);
    });
  });

  useEffect(() => {
    init.current(text, toc);
  }, [init, text, toc]);

  return { Content, tocParent };
}
