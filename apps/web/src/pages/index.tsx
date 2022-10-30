import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { CrossCardAnimation } from '@/components/sections/cross-card-animation/CrossCardAnimation';
import { HomeHeroSection } from '@/components/sections/hero/HomeHeroSection';
import { HowEasy } from '@/components/sections/how-easy/HowEasy';
import { IntelligentSystem } from '@/components/sections/intelligent-system/IntelligentSystem';
import { JobsCreation } from '@/components/sections/jobs-creation/JobsCreation';
import { PageSections } from '@/components/sections/page-sections';
import { QuickTutorials } from '@/components/sections/quick-tutorials/QuickTutorials';
import { SupportBusiness } from '@/components/sections/support-business/SupportBusiness';
import Seo from '@/components/Seo';

import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { getServerSideTranslations } from '@/utils/server-translation';
import { ClientReview } from '@/components/sections/clients-review/ClientReview';
import { FastServer } from '@/components/sections/fast-server/FastServer';
import { TrustMatters } from '@/components/sections/trust-mutters/TrustMatters';
import { ImageGallery } from '@/components/sections/image-gallery/ImageGallery';
import { BecomePartner } from '@/components/sections/become-partner/BecomePartner';
import { ImageCardScroll } from '@/components/sections/image-card-scroll/ImageCardScroll';
import { PlatformCategory } from '@/components/sections/platform-category/PlatformCategory';

export default function HomePage(props: Partial<QHomeHeroQueriesType>) {
  const { HomeHero, HomeSections } = props;

  return (
    <Layout>
      <Seo />

      <section className='hero-section py-10'>
        {HomeHero && <HomeHeroSection data={HomeHero} />}
      </section>

      <section className='py-10 bg-white'>
        <CrossCardAnimation />
      </section>

      <section className='py-10 bg-white'>
        <QuickTutorials />
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

      <section className='py-10 bg-[#f5f7fa]'>
        <JobsCreation />
      </section>

      <section className='py-10 bg-white'>
        <ClientReview />
      </section>

      <section className='py-10 bg-[#f5f7fa]'>
        <FastServer />
      </section>

      <section className='py-10 bg-white'>
        <TrustMatters />
      </section>

      <section className='py-10 bg-[#f5f7fa]'>
        <ImageGallery />
      </section>

      <section className='py-10 bg-white'>
        <BecomePartner />
      </section>

      <section className='py-10 bg-white'>
        <ImageCardScroll />
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
