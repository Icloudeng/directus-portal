import { useSharedData } from '@/app/store';
import { Footer } from './footer/Footer';
import Header from './Header';
import { MobileMenu } from './mobileMenu/MobileMenu';

export default function Layout({
  children,
  whiteNav,
}: {
  children: React.ReactNode;
  whiteNav?: boolean;
}) {
  const { Layout } = useSharedData();
  return (
    <div
      id='layout__container'
      className='min-h-screen min-w-full flex flex-col bg-gradient-to-b pt-36'
      style={{ backgroundColor: Layout?.site_background_color || '#313B4D' }}
    >
      <Header whiteNav={whiteNav} />
      {whiteNav && <div className='h-14 sd:h-24 bg-white -mt-[8rem] xl:h-32' />}
      <div className='flex-1 flex flex-col justify-center z-0 main__content'>
        {children}
      </div>
      <Footer />
      <MobileMenu />
      <div className='bg-overlay hidden fixed top-0 sd:top-10 left-0 bg-green-300 bg-black/60 w-full h-full z-40' />
    </div>
  );
}
