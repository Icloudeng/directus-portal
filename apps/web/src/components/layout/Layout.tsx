import cn from '@/lib/cn';

import { useSharedData } from '@/app/store';

import { Footer } from './footer/Footer';
import { FooterSimple } from './footer/FooterSimple';
import Header from './Header';
import { MobileMenu } from './mobileMenu/MobileMenu';

export default function Layout({
  children,
  whiteNav,
}: {
  children: React.ReactNode;
  whiteNav?: boolean;
}) {
  const { FooterLayout } = useSharedData();

  return (
    <div
      id='layout__container'
      className='min-h-screen min-w-full flex flex-col bg-gradient-to-b pt-36 bg-[var(--bg-main-color)] relative'
    >
      <Header whiteNav={whiteNav} />
      <div
        className={cn(
          'h-14 sd:h-24 bg-white -mt-[8rem] xl:h-32 white-navbar',
          whiteNav ? 'block' : 'hidden'
        )}
      />

      <main className='main__content z-0 flex flex-col justify-center'>
        {children}
      </main>

      {FooterLayout?.footer_type !== 'simple_footer' && <Footer />}
      {FooterLayout?.footer_type === 'simple_footer' && <FooterSimple />}

      <MobileMenu />

      <div className='bg-overlay hidden fixed top-0 sd:top-10 left-0 bg-black/60 w-full h-full z-40' />
    </div>
  );
}
