import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import { PageSections } from '@/components/sections/page-sections';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';

export default function Page() {
  return (
    <Layout>
      <Seo />
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
    },
  };
}
