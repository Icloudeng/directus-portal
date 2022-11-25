import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/layout/Layout';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlNewsBySlug } from '@/cms/items';
import { MDNews } from '@apps/contracts';

import { Publishing } from '@/components/pages/publishing';

export default function Page({ news }: { news: MDNews }) {
  return (
    <Layout whiteNav={true}>
      <Publishing item={news} type='TOPBAR_NEWS' />
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const slug = query.slug as string;
  const res = await getGqlNewsBySlug(slug).catch(console.error);

  if (!res || !res.data || res.data.news.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      news: res.data.news[0],
    },
  };
}
