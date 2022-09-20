import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { CloudComputing } from '@/components/sections/cloud-computing/CloudComputing';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { HowEasy } from '@/components/sections/how-easy/HowEasy';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/utils/server-translation';
import { getDirectusAuthToken } from '@/cms/directus';
import { getGqlHomeHero, QHomeHeroType } from '@/cms/items/home-hero';
import { useEffect } from 'react';

export default function HomePage({ HomeHero }: Partial<QHomeHeroType>) {
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
      </main>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const access_token = await getDirectusAuthToken();
  const { data } = await getGqlHomeHero(access_token);

  return {
    props: {
      ...(await getServerSideTranslations(locale!, ['home'])),
      ...(data || {}),
    },
  };
}
