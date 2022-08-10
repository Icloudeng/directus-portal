import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
    {/* <h1>Header</h1> */}
    {children}
    {/* <h1>Footer</h1> */}
  </>;
}
