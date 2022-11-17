import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { PageSections } from '@/components/sections/page-sections';
import Seo from '@/components/Seo';

import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { PlatformCategory } from '@/components/sections/platform-category/PlatformCategory';

export default function HomePage(props: Partial<QHomeHeroQueriesType<true>>) {
  const { HomeHero, HomeSections } = props;

  return (
    <Layout>
      <Seo />

      {HomeHero && HomeHero.status === 'published' && (
        <section className='hero-section py-10'>
          <HomeHeroSection data={HomeHero} />
        </section>
      )}

      {/* <section className='py-10 bg-[#f5f7fa]'>
        <PlatformCategory />
      </section> */}

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
      ...(await getServerSideTranslations(locale!, ['home'])),
      ...(res?.data || {}),
    },
  };
}
