import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/ui/links/ArrowLink';

import { getServerSideTranslations } from '@/app/utils/server-translation';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-[90vh] flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl leading-10'>
              {t('Page Not Found')}
            </h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              {t('Back to Home')}
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale as string, ['404'])),
    },
  };
}
