import rehypeToc, { Options } from '@jsdevtools/rehype-toc';
import { useEffect, useId, useRef } from 'react';
import rehypeSlug from 'rehype-slug';

import { scrollToElement } from '../utils/scroll-to-element';

export function useRehypeToc(toc: boolean, refresh = 0) {
  const id = useId();
  const tocParent = useRef<HTMLDivElement | null>(null);
  const tocOptions: Options = {
    customizeTOC: (node) => {
      (node.properties as any)['hidden'] = true;
      node.properties['id'] = id;
      return true;
    },
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
  }, [toc, id, refresh]);

  useEffect(() => {
    if (!toc || !tocParent.current) return;
    const navToc = document.getElementById(id);
    if (navToc && !tocParent.current.contains(navToc)) {
      tocParent.current.appendChild(navToc);
      navToc.removeAttribute('hidden');
    }
  }, [toc, id, refresh]);

  return { tocOptions, tocParent, rehypeToc, rehypeSlug };
}
