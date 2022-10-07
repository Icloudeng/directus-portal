import { useCallback, useEffect, useRef, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { TopBar } from '../topBar/TopBar';
import throttle from 'lodash/throttle';

export default function Header() {
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

  const throttleScroll = useCallback(() => {
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      lastScrollY.current = window.scrollY;
      window.addEventListener('scroll', onScroll);
      window.addEventListener('scroll', throttle(throttleScroll, 100));
    }, 0);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', throttleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 right-0 z-40 transition-transform translate-y-0 layout--header ${
        !hasTop ? 'sd:-translate-y-[41px]' : ''
      }`}
    >
      <TopBar />
      <Navbar />
    </header>
  );
}
