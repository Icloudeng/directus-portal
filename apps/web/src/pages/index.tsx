import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/utils/server-translation';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='z-0'>
        <section className='hero-section py-10'>
          <HeroSection />
        </section>
        {/* <section className='py-10 bg-white'>
          <UnderHeroSection />
        </section> */}
        <section className='py-10 bg-[#f5f7fa]'>
          <CloudComputing />
        </section>

        <section className='py-10 bg-white'>
          <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
              <h1 className='text-center'>How easy is cloud computing</h1>
              <span className='max-w-xl text-center'>
                A new study confirms what most of us have said for years: cloud
                computing has a high degree of difficulty. However, worthwhile
                endeavours are rarely easy. Unexpected cloud complexity has put
                so much stress on the newly formed clouds groups that they have
                risked outages and breaches
              </span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!, ['home'])),
    },
  };
}
