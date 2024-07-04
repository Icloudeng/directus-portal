import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Layout from '@/components/layout/Layout';
import { PageSections } from '@/components/sections/page-sections';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlDynamicPages, QDynamicPagesType } from '@/cms/items';
import { UnderConstructionSvg } from '@/components/ui/svgs/UnderConstruction';

export default function Page(props: QDynamicPagesType<true>) {
  const { Pages } = props;
  const page = Pages[0] as NonNullable<(typeof Pages)[number]>;

  const { t } = useTranslation();
  const { query } = useRouter();

  return (
    <Layout>
      <Seo dynamicPage={page} />
      {page.sections.length === 0 && (
        <div className='relative py-10 bg-white isolate'>
          <div className='flex justify-center  x-container w-full md:w-1/3'>
            <div className='rounded-[10%]'>
              <UnderConstructionSvg className='w-full h-auto' />
            </div>
          </div>
          <h4 className='text-center my-24'>
            {t('UNDER_CONSTRUCTION', { page: query.page })}
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
  const page = query.page as string | string[];
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
      ...(await getServerSideTranslations(locale as string)),
      ...(res?.data || {}),
    },
  };
}
