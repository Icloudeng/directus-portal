import * as React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  // return <>
  //   {/* <h1>Header</h1> */}
  //   {children}
  //   {/* <h1>Footer</h1> */}
  // </>;
  const styles = {
    wrapper: 'min-h-screen min-w-full flex flex-col',
    mainContainer: 'flex-1 flex flex-col justify-center bg-gray-50',
  }
  return (
    <div className={styles.wrapper}>
      {/* <h4 className=''>Header</h4> */}
      <Header />
      <div className={styles.mainContainer}>
        {children}
      </div>
      <h4>Footer</h4>
    </div>
  )
}
