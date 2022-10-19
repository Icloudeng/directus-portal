import Header from './Header';
import { Footer } from './footer/Footer';
import { MobileMenu } from './mobileMenu/MobileMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id='layout__container'
      className='min-h-screen min-w-full flex flex-col bg-gradient-to-b from-[#353f53] to-darkBg pt-36'
    >
      <Header />
      <div className='flex-1 flex flex-col justify-center z-0 main__content'>
        {children}
      </div>
      <Footer />
      <MobileMenu />
      <div className='bg-overlay hidden fixed top-0 sd:top-10 left-0 bg-green-300 bg-black/60 w-full h-full z-40' />
    </div>
  );
}
