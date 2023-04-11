import throttle from 'lodash/throttle';
import { useCallback, useEffect, useRef, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { useSharedData } from '@/app/store';

import { Navbar } from './navbar/Navbar';
import { TopBar } from './topBar/TopBar';

export default function Header({ whiteNav }: { whiteNav?: boolean }) {
  const { Layout } = useSharedData();
  const hasTopbar = Layout?.show_topbar !== false;

  const [hasTop, setHasTop] = useState(true);
  const lastScrollY = useRef(0);

  const onScroll = useCallback(() => {
    if (window.scrollY === lastScrollY.current) return;
    if (lastScrollY.current < window.scrollY) {
      setHasTop(false);
    } else {
      setHasTop(true);
    }
  }, []);

  useEffect(() => {
    const throttleScroll = throttle(() => {
      lastScrollY.current = window.scrollY;
    }, 100);

    setTimeout(() => {
      lastScrollY.current = window.scrollY;
      window.addEventListener('scroll', onScroll);
      window.addEventListener('scroll', throttleScroll);
    }, 0);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);

  return (
    <header
      className={clsxm(
        'fixed left-0 top-0 right-0 z-40 transition-transform translate-y-0 layout--header',
        !hasTop && hasTopbar && ['sd:-translate-y-[41px]']
      )}
    >
      {hasTopbar && <TopBar />}
      <Navbar whiteNav={whiteNav} />
    </header>
  );
}
