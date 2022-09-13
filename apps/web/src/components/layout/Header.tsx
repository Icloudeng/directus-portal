import React, { useEffect, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { TopBar } from '../topBar/TopBar';

export default function Header() {
  const [deltaY, setDeltaY] = useState(0);

  const onMouseWheelX = (ev: WheelEvent) => {
    setDeltaY(ev.deltaY);
  };

  useEffect(() => {
    window.addEventListener('wheel', onMouseWheelX);
    return () => {
      window.removeEventListener('wheel', onMouseWheelX);
    };
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 right-0 z-30 transition-transform translate-y-0 layout--header ${
        deltaY > 0 ? 'sd:-translate-y-[41px]' : ''
      }`}
    >
      <TopBar />
      <Navbar />
    </header>
  );
}
