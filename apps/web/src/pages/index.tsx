import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { PageSections } from '@/components/sections/page-sections';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { useMut } from '@/cms/mut';

export default function HomePage(props: Partial<QHomeHeroQueriesType<true>>) {
  const { HomeHero, HomeSections } = props;
  const home = useMut(HomeHero);

  return (
    <Layout>
      <Seo templateTitle={home?.translations?.page_title} />

      {HomeHero && HomeHero.status === 'published' && (
        <section className='hero-section py-10'>
          <HomeHeroSection data={HomeHero} />
        </section>
      )}

      {HomeSections && <PageSections sections={HomeSections.sections} />}
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const res = await getGqlHomeQueries().catch(console.error);

  return {
    props: {
      ...(await getServerSideTranslations(locale as string, ['home'])),
      ...(res?.data || {}),
    },
  };
}
