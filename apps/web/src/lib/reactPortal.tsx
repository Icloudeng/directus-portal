import { PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const ReactPortal = ({
  children,
  containerId,
}: PropsWithChildren<{ containerId: string }>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(children, document.querySelector(containerId)!)
    : null;
};
