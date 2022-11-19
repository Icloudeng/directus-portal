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
import EmptySvg from '~/svg/empty.svg';
import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import { NewsCard } from '@/components/ui/cards/NewsCard';

export default function Page({ news }: { news: MDNews[] }) {
  const { t } = useTranslation();
  const title = capitalize(t('TOPBAR_NEWS'));
  const { locale } = useSharedData();

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
            <div className='w-full xs:w-1/2 md:w-1/3 mx-auto'>
              {news.length === 0 && <EmptySvg className='w-full h-full' />}
            </div>

            <div className='cards--news flex flex-wrap'>
              {news.map(($new) => {
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
                      date={new Date(date_created).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      link={'/news/' + slug}
                    />
                  </div>
                );
              })}
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
  const res = await getGqlListNewsQuery((query.q as string) || undefined);

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      news: res.data?.news || [],
    },
  };
}
