import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { HowEasy } from '@/components/sections/how-easy/HowEasy';
import { IntelligentSystem } from '@/components/sections/intelligent-system/IntelligentSystem';
import { PageSections } from '@/components/sections/page-sections';
import { SupportBusiness } from '@/components/sections/support-business/SupportBusiness';
import Seo from '@/components/Seo';

import { getDirectusAuthToken } from '@/cms/directus';
import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { getServerSideTranslations } from '@/utils/server-translation';

export default function HomePage(props: Partial<QHomeHeroQueriesType>) {
  const { HomeHero, HomeSections } = props;

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='z-0'>
        <section className='hero-section py-10'>
          {HomeHero && <HeroSection data={HomeHero} />}
        </section>

        <section className='py-10 bg-[#f5f7fa]'>
          <CloudComputing />
        </section>

        <section className='py-10 bg-white'>
          <HowEasy />
        </section>

        <section className='py-10 bg-[#f5f7fa]'>
          <IntelligentSystem />
        </section>

        {/* <section className='py-10 bg-[#f5f7fa]'>
          <UnderHeroSection />
        </section> */}
        <section className='py-10 bg-white'>
          <SupportBusiness />
        </section>

        {HomeSections && <PageSections sections={HomeSections.sections} />}
      </main>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const access_token = await getDirectusAuthToken();
  const res = await getGqlHomeQueries(access_token).catch(console.error);

  return {
    props: {
      ...(await getServerSideTranslations(locale!, ['home'])),
      ...(res?.data || {}),
    },
  };
}
