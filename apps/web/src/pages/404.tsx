import { GetServerSidePropsContext } from 'next';
import Seo from '@/components/Seo';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <Content />
    </>
  );
}

function Content() {
  const ref = useRef<HTMLIFrameElement | null>(null);
  const [faced, setFaced] = useState(false);
  const route = useRouter();

  const timerRef = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    const iwindow = ref.current.contentWindow;
    if (!iwindow) return;

    const detect = function () {
      const currentPathname = iwindow.location.pathname;

      if (!currentPathname.startsWith('/custom-404')) {
        setFaced(true);
        window.clearInterval(timerRef.current);
        route.push(currentPathname);
      }
    };

    timerRef.current = window.setInterval(detect, 100);
    return () => {
      window.clearInterval(timerRef.current);
    };
  }, [ref]);

  return (
    <>
      {faced && <div className='fixed inset-0 h-full w-full z-20' />}
      <iframe
        src='/custom-404?iframed=true'
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
