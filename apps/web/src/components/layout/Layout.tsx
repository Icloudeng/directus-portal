import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import { TopBar } from '../topBar/TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const styles = {
    wrapper: 'min-h-screen min-w-full flex flex-col bg-gray-50 dark:bg-darkBg',
    mainContainer: 'flex-1 flex flex-col justify-center',
  }
  return (
    <div className={styles.wrapper}>
      {/* <h4 className=''>Header</h4> */}
      <TopBar message='Introducing new platform for data analysis' />
      {/* <Header /> */}
      <Navbar />
      <div className={styles.mainContainer}>
        {children}
      </div>
      {/* <h4 className='layout dark:text-green-600'>Footer</h4> */}
      <Footer />
    </div>
  )
}
