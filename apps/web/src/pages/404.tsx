import { GetServerSidePropsContext } from 'next';
import Seo from '@/components/Seo';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const route = useRouter();
  const timerRef = useRef(0);
  const [faced, setFased] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const iwindow = ref.current.contentWindow;
    if (!iwindow) return;

    const oldPathname = iwindow.location.pathname;
    const detect = function () {
      const currentPathname = iwindow.location.pathname;
      if (oldPathname !== currentPathname && !currentPathname.startsWith('/custom-404')) {
        window.clearInterval(timerRef.current);
        route.push(currentPathname);
        setFased(true);
      }
    };

    timerRef.current = window.setInterval(detect, 100);
    return () => {
      window.clearInterval(timerRef.current);
    };
  }, [ref]);

  return (
    <>
      <Seo templateTitle='Not Found' />
      {faced && <div className='fixed inset-0 h-full w-full z-20' />}
      <iframe
        src='custom-404'
        ref={ref}
        className='fixed inset-0 h-full w-full z-10'
      />
    </>
  );
}

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!, ['404'])),
    },
  };
}
