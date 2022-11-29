import { GetServerSidePropsContext } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';
import { useTranslation } from 'next-i18next';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/ui/links/ArrowLink';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlSharedData } from '@/cms/items';
import { SharedDataProvider } from '@/app/store';

export default function NotFoundPage(props: any) {
  const { t } = useTranslation('404');

  return (
    <SharedDataProvider value={props}>
      <Layout>
        <Seo templateTitle='Not Found' />

        <main>
          <section className='bg-white'>
            <div className='layout flex min-h-[90vh] flex-col items-center justify-center text-center text-black'>
              <RiAlarmWarningFill
                size={60}
                className='drop-shadow-glow animate-flicker text-red-500'
              />
              <h1 className='mt-8 text-4xl md:text-6xl'>
                {t('Page Not Found')}
              </h1>
              <ArrowLink className='mt-4 md:text-lg' href='/'>
                {t('Back to Home')}
              </ArrowLink>
            </div>
          </section>
        </main>
      </Layout>
    </SharedDataProvider>
  );
}

export async function getStaticProps({
  locale,
  locales,
}: GetServerSidePropsContext) {
  const translations = await getServerSideTranslations(locale!);
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    return {
      props: {
        languages: [],
        TopbarLinks: [],
        NavbarLinks: [],
        FooterLinks: [],
        ...translations,
      },
    };
  }
  const res = await getGqlSharedData().catch(console.error);

  if (res && res.data) {
    res.data.languages = res.data.languages.filter((lang) =>
      locales!.includes(lang.code)
    );
  }
  return {
    props: {
      locale,
      ...(res?.data || {}),
      ...translations,
    },
  };
}
