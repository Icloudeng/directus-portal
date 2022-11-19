import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { CleanHero } from '@/components/layout/footer/CleanHero';
import { useTranslation } from 'next-i18next';
import capitalize from 'lodash/capitalize';
import { getGqlListNewsQuery } from '@/cms/items';
import { MDNews } from '@/cms/items/types';
import { SearchForm } from '@/components/ui/form-control/SearchFrom';
import { useEffect } from 'react';

export default function Page({ news }: { news: MDNews[] }) {
  const { t } = useTranslation();
  const title = capitalize(t('TOPBAR_NEWS'));

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={title} />
      <CleanHero
        title={title}
        noBottomSpace={true}
        description={t('Learn more about the our latest updates') + '.'}
      />

      <div className='bg-[#f5f7fa] pb-9 pt-5'>
        <div className='x-container'>
          <div className='mx-auto w-full sm:max-w-md'>
            <SearchForm />
          </div>

          <div className='mt-24'></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const res = await getGqlListNewsQuery((query.q as string) || undefined);

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      news: res.data || [],
    },
  };
}
