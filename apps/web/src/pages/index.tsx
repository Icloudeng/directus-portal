import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { HomeHeroSection } from '@/components/sections/hero/HomeHeroSection';
import { HowEasy } from '@/components/sections/how-easy/HowEasy';
import { IntelligentSystem } from '@/components/sections/intelligent-system/IntelligentSystem';
import { JobsCreation } from '@/components/sections/jobs-creation/JobsCreation';
import { PageSections } from '@/components/sections/page-sections';
import { SupportBusiness } from '@/components/sections/support-business/SupportBusiness';
import Seo from '@/components/Seo';

import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { PlatformCategory } from '@/components/sections/platform-category/PlatformCategory';
import { MarketPlace } from '@/components/sections/maket-place/MarketPlace';

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

      <section className='py-10 bg-[#f5f7fa]'>
        <CloudComputing />
      </section>

      <section className='py-10 bg-white'>
        <HowEasy />
      </section>

      <section className='py-10 bg-[#f5f7fa]'>
        <IntelligentSystem />
      </section>

      <section className='py-10 bg-white'>
        <SupportBusiness />
      </section>

      <section className='py-10 bg-[#f5f7fa]'>
        <JobsCreation />
      </section>

      <section className='py-10 bg-white'>
        <MarketPlace />
      </section>

      <section className='py-10 bg-[#f5f7fa]'>
        <PlatformCategory />
      </section>

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
