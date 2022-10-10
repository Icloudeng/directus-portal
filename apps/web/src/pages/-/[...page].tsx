import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import { PageSections } from '@/components/sections/page-sections';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/utils/server-translation';
import { getGqlDynamicPages, QDynamicPagesType } from '@/cms/items';
import { EmptyCanvasSvg } from '@/components/svgs/EmptyCanvas';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Page(props: QDynamicPagesType) {
  const { Pages } = props;
  const page = Pages[0]!;

  const { t } = useTranslation();
  const { query } = useRouter();

  useEffect(() => {
    console.log('dynamic page ', page);
  }, []);

  return (
    <Layout>
      <Seo dynamicPage={page} />
      {page.sections.length === 0 && (
        <div className={`relative py-10 bg-white isolate`}>
          <div className='flex justify-center'>
            <div className='rounded-[10%]'>
              <EmptyCanvasSvg />
            </div>
          </div>
          <h4 className='text-center my-24'>
            {t('NO_CONTENT_FOUND', { page: query.page })}
          </h4>
        </div>
      )}
      {page && <PageSections sections={page.sections} />}
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const page = query.page!;
  let pathname = (page as string[]).join('/');
  pathname = pathname.endsWith('/') ? pathname : pathname + '/';

  const res = await getGqlDynamicPages(pathname).catch(console.error);

  if (!res || !res.data?.Pages[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      ...(res?.data || {}),
    },
  };
}
