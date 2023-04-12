import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';

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

  useEffect(() => {
    if (!ref.current) return;
    const iwindow = ref.current.contentWindow;
    if (!iwindow) return;

    setFaced(false);

    const onChange = (e: CustomEventInit) => {
      route.push(e.detail);
      setFaced(true);
    };

    iwindow.addEventListener('NextRouteChangeStart', onChange);
    return () => {
      iwindow.removeEventListener('NextRouteChangeStart', onChange);
    };
  }, [ref, route]);

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
      ...(await getServerSideTranslations(locale as string, ['404'])),
    },
  };
}
