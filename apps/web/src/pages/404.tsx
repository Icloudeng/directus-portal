import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { RiAlarmWarningFill } from 'react-icons/ri';

import ArrowLink from '@/components/ui/links/ArrowLink';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import Layout from '@/components/layout/Layout';

export default function NotFoundPage() {
  const { t } = useTranslation('404');
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-[70vh] flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>{t('Page Not Found')}</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              {t('Back to Home')}
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
    },
  };
}
