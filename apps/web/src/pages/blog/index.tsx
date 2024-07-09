import { MDBlog } from '@packages/contracts';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';

import { CleanHero } from '@/components/layout/CleanHero';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { BlingCard } from '@/components/ui/cards/BlingCard';
import { LoadMore } from '@/components/ui/fetch/LoadMore';
import { SearchForm } from '@/components/ui/form-control/SearchFrom';

import { useSharedData } from '@/app/store';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlListBlogQuery } from '@/cms/items';
import { mut } from '@/cms/mut';

import EmptySvg from '~/svg/empty.svg';

const LIMIT = 9;

export default function Page({ blogs }: { blogs: MDBlog[] }) {
  const { t } = useTranslation();
  const { locale } = useSharedData();
  const router = useRouter();
  const [data, setData] = useState(blogs);

  useEffect(() => {
    setData(blogs);
  }, [blogs]);

  const onNewItems = useCallback((items: any[]) => {
    setData((its) => its.concat(items));
  }, []);

  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={t('Blog')} />
      <CleanHero title='Blog' noBottomSpace={true} />

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
            <div className='grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 gap-5 '>
              {data.map((blog) => {
                const { translations, id, image, slug } = mut(blog, locale);
                return (
                  <BlingCard
                    key={id}
                    title={translations?.title || ''}
                    description={translations?.summary || ''}
                    link={'/blog/' + slug}
                    image={image}
                  />
                );
              })}
            </div>

            <div className='w-full mt-12'>
              <div className='max-w-[200px] mx-auto'>
                <LoadMore
                  fetchUrl='/api/publishing/blog'
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
  const res = await getGqlListBlogQuery(
    (query.q as string) || undefined,
    0,
    LIMIT
  );
  return {
    props: {
      ...(await getServerSideTranslations(locale as string)),
      blogs: res.data?.blogs || [],
    },
  };
}
