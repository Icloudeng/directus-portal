import UnstyledLink from '@/components/ui/links/UnstyledLink';
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import throttle from 'lodash/throttle';
import capitalize from 'lodash/capitalize';

export function AsideMenu({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const arrChildren = React.Children.toArray(children);

  const titles = arrChildren
    .map((child, index) => {
      const node = child as React.ReactElement;
      const title = node?.props?.menuTitle;
      return title
        ? {
            title,
            index,
            href: title as string,
            node,
          }
        : null;
    })
    .filter(Boolean)
    .map((title, i) => {
      const $title = title!;
      $title.href =
        $title.href.split(' ').join('-').toLowerCase() + '-aside_menu-' + i;
      $title.node = React.cloneElement($title.node, {
        href: $title.href,
        last: i === arrChildren.length - 1,
      });
      return $title;
    });

  const id = titles.map(({ title }) => title).join('');

  useEffect(() => {
    const elements = titles
      .map(({ href }) => document.getElementById(href)!)
      .filter(Boolean);

    const onScroll = throttle(() => {
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
  }, [id]);

  const onMenuClick = useCallback((index: number, href: string) => {
    return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      const cel = document.getElementById('label-' + href);
      if (!cel) return;
      const rect = cel.getBoundingClientRect()!;
      window.scroll({
        top:
          rect.y > 0
            ? rect.y + window.scrollY - 150
            : window.scrollY - Math.abs(rect.y) - 150,
        behavior: 'smooth',
      });
    };
  }, []);

  return (
    <div className='flex items-start mt-9'>
      <aside className='sticky hidden lg:block top-56 container__nav flex-1'>
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
  ...props
}: PropsWithChildren<{
  menuTitle: string;
  title?: string;
}>) {
  const { href, last } = props as any;
  return (
    <div
      id={href}
      className={`content-section flex flex-col gap-8 ${!last ? 'mb-20' : ''}`}
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
