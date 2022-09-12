import { Footer } from '../footer/Footer';
import { MobileMenu } from '../mobileMenu/MobileMenu';
import { Navbar } from '../navbar/Navbar';
import { TopBar } from '../topBar/TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = {
    wrapper:
      'min-h-screen min-w-full flex flex-col bg-gradient-to-b from-[#353f53] to-darkBg',
    mainContainer: 'flex-1 flex flex-col justify-center',
  };
  return (
    <div id='layout__container' className={styles.wrapper}>
      <TopBar />
      <Navbar />
      <div className={styles.mainContainer}>{children}</div>
      <Footer />
      <MobileMenu />
      <div className='bg-overlay hidden fixed top-0 left-0 bg-green-300 bg-black/60 w-full h-full z-40'></div>
    </div>
  );
}
