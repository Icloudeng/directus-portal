import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { HowEasy } from '@/components/sections/how-easy/HowEasy';
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
        
        <section className='py-10 bg-[#f5f7fa]'>
          <CloudComputing />
        </section>

        <section className='py-10 bg-white'>
          <HowEasy />
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
