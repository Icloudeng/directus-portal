import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { useTranslation } from 'next-i18next';
import { CleanHero } from '@/components/layout/footer/CleanHero';

export default function Page() {
  const { t } = useTranslation();
  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={t('Blog')} />
      <CleanHero title={'Blog'} />
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
    },
  };
}
