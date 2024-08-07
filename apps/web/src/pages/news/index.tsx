import { MDNews } from '@packages/contracts';
import capitalize from 'lodash/capitalize';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';

import { CleanHero } from '@/components/layout/CleanHero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { NewsCard } from '@/components/ui/cards/NewsCard';
import { LoadMore } from '@/components/ui/fetch/LoadMore';
import { SearchForm } from '@/components/ui/form-control/SearchFrom';

import { useSharedData } from '@/app/store';
import { formatDate } from '@/app/utils/helpers';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlListNewsQuery } from '@/cms/items';
import { mut } from '@/cms/mut';

import EmptySvg from '~/svg/empty.svg';

const LIMIT = 9;

export default function Page({ news }: { news: MDNews[] }) {
  const { t } = useTranslation();
  const title = capitalize(t('TOPBAR_NEWS'));
  const { locale } = useSharedData();
  const router = useRouter();
  const [data, setData] = useState(news);

  useEffect(() => {
    setData(news);
  }, [news]);

  const onNewItems = useCallback((items: any[]) => {
    setData((its) => its.concat(items));
  }, []);

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

          <div className='mt-24'>
            {data.length === 0 && (
              <div className='w-full xs:w-1/2 md:w-1/3 mx-auto'>
                <EmptySvg className='w-full h-full' />
              </div>
            )}

            <div className='cards--news flex flex-wrap'>
              {data.map(($new) => {
                const { translations, id, image, date_created, slug } = mut(
                  $new,
                  locale
                );
                return (
                  <div className='w-full sd:w-1/2 lg:w-1/3 px-3 mb-10' key={id}>
                    <NewsCard
                      image={image}
                      title={translations?.title || ''}
                      summary={translations?.summary}
                      date={formatDate(date_created)}
                      link={'/news/' + slug}
                    />
                  </div>
                );
              })}
            </div>

            <div className='w-full mt-12'>
              <div className='max-w-[200px] mx-auto'>
                <LoadMore
                  fetchUrl='/api/publishing/news'
                  limit={LIMIT}
                  query={router.query.q as string}
                  queryName='q'
                  onNewItems={onNewItems}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const res = await getGqlListNewsQuery(
    (query.q as string) || undefined,
    0,
    LIMIT
  );

  return {
    props: {
      ...(await getServerSideTranslations(locale as string)),
      news: res.data?.news || [],
    },
  };
}
