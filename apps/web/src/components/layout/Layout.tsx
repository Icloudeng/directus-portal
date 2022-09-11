import { Footer } from '../footer/Footer';
import { MobileMenu } from '../mobileMenu/MobileMenu';
// import { Navbar2 } from '../navbar/SubMenu';
import { Navbar } from '../navbar/Navbar';
import { TopBar } from '../topBar/TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = {
    wrapper: 'min-h-screen min-w-full flex flex-col bg-gradient-to-b from-[#353f53] to-darkBg',
    mainContainer: 'flex-1 flex flex-col justify-center',
  }
  return (
    <div id='layout__container' className={styles.wrapper}>
      <TopBar message='Introducing new platform for data analysis' href='#' />
      <Navbar />
      <div className={styles.mainContainer}>
        {children}
      </div>
      {/* <h4 className='layout dark:text-green-600'>Footer</h4> */}
      <Footer />
      {/* <MobileMenu /> */}
    </div>
  )
}
