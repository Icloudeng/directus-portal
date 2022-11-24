import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlBlogBySlug } from '@/cms/items';
import { MDBlog } from '@/cms/items/types';
import { Publishing } from '@/components/pages/publishing';

export default function Page({ blog }: { blog: MDBlog }) {
  return (
    <Layout whiteNav={true}>
      <Publishing item={blog} type='Blog' />
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const slug = query.slug as string;
  const res = await getGqlBlogBySlug(slug).catch(console.error);

  if (!res || !res.data || res.data.blogs.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      blog: res.data.blogs[0],
    },
  };
}
