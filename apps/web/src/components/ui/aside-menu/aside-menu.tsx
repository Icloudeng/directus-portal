import capitalize from 'lodash/capitalize';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import cn from '@/lib/cn';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { asciify } from '@/app/utils/asciify';
import { scrollToElement } from '@/app/utils/scroll-to-element';

export function AsideMenu({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const hasClickScroll = useRef(false);

  const titles = useMemo(() => {
    const arrChildren = React.Children.toArray(children);
    return arrChildren
      .map((child, index) => {
        const node = child as React.ReactElement;
        const title = node?.props?.menuTitle;

        return title
          ? {
              title,
              index,
              href: node?.props?.hrefTitle || (title as string),
              node,
            }
          : null;
      })
      .filter(Boolean)
      .map((_child, i) => {
        const child = _child as NonNullable<typeof _child>;

        child.href =
          child.href.split(' ').join('-').toLowerCase() + '-aside_menu-' + i;

        child.href = asciify(child.href);

        child.node = React.cloneElement(child.node, {
          href: child.href,
          last: i === arrChildren.length - 1,
        });

        return child;
      });
  }, [children]);

  const id = titles.map(({ title }) => title).join('');

  useEffect(() => {
    const elements = titles
      .map(({ href }) => document.getElementById(href) as HTMLElement)
      .filter(Boolean);

    const onScroll = throttle(() => {
      if (hasClickScroll.current) return;
      const screenY = window.scrollY + window.innerHeight / 2;
      const rects = elements.map((el) => {
        const middle =
          window.scrollY + window.innerHeight - el.getBoundingClientRect().y;
        return middle;
      });

      let index = -1;
      rects.forEach((rect, i) => {
        if (rect >= screenY) {
          index = i;
        }
      });
      if (index > -1) setActive(index);
    }, 100);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [id, titles]);

  const onMenuClick = useCallback((index: number, href: string) => {
    return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      const cel = document.getElementById('label-' + href);
      if (!cel) return;

      const rect = cel.getBoundingClientRect();
      hasClickScroll.current = true;
      let scrollHasStarted = false;

      const onScroll = debounce(() => {
        window.removeEventListener('scroll', onScroll);
        setActive(index);
        hasClickScroll.current = false;
      }, 101);

      const onScrollHasStarted = () => {
        window.removeEventListener('scroll', onScrollHasStarted);
        scrollHasStarted = true;
      };
      window.addEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScrollHasStarted);
      window.setTimeout(() => {
        if (!scrollHasStarted) {
          hasClickScroll.current = false;
          scrollHasStarted = false;
        }
      }, 101);

      scrollToElement(rect);
    };
  }, []);

  return (
    <div className='flex items-start mt-9'>
      <aside className='sticky hidden lg:max-h-[80vh] lg:block top-56 container__nav flex-1'>
        <ul className='aside-menu border-l'>
          {titles.map(({ title, index, href }, i) => {
            return (
              <li
                key={i}
                className={`aside-menu__item mb-5 hover:text-primary-500 ${
                  index === active ? 'border-l border-primary-500' : ''
                }`}
              >
                <UnstyledLink
                  onClick={onMenuClick(index, href)}
                  href={'#' + href}
                  className='pl-7'
                >
                  {capitalize(title)}
                </UnstyledLink>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className='container__content flex-[3]'>
        {titles.map(({ node }) => node)}
      </div>
    </div>
  );
}

export function AsideMenuContent({
  children,
  menuTitle,
  title,
  className,
  ...props
}: PropsWithChildren<{
  title?: string;
  className?: string;
  menuTitle: string;
  hrefTitle?: string;
}>) {
  const { href, last } = props as any;
  return (
    <div
      id={href}
      className={cn(
        `content-section flex flex-col gap-8`,
        className,
        !last && 'mb-20'
      )}
    >
      <div className='header--container'>
        <div className='section__header max-w-2xl space-y-5'>
          <div className='header__title space-y-1'>
            <span
              id={'label-' + href}
              className='text-[0.7rem] uppercase text-slate-500'
            >
              {menuTitle}
            </span>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className='content-container'>{children}</div>
    </div>
  );
}
