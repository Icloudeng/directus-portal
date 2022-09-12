import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { UnderHeroSection } from '@/components/sections/underHero/UnderHeroSection';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/utils/server-translation';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className='z-0'>
        <section className='hero-section py-10'>
          <ParticlesBackground />
          <HeroSection />
        </section>
        <section className='py-10 bg-white'>
          <UnderHeroSection />
        </section>
        <section className='py-10 bg-[#f5f7fa]'>
          <h1>
            Hello from Cloud IT Engineering portal Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur numquam provident cum,
            fugit, rerum iste voluptates, nulla repudiandae mollitia similique
            dignissimos temporibus suscipit deleniti facilis! Porro obcaecati
            voluptatibus iste nesciunt! Hello from Cloud IT Engineering portal
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            numquam provident cum, fugit, rerum iste voluptates, nulla
            repudiandae mollitia similique dignissimos temporibus suscipit
            deleniti facilis! Porro obcaecati voluptatibus iste nesciunt! Hello
            from Cloud IT Engineering portal Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur numquam provident cum,
            fugit, rerum iste voluptates, nulla repudiandae mollitia similique
            dignissimos temporibus suscipit deleniti facilis! Porro obcaecati
            voluptatibus iste nesciunt! Hello from Cloud IT Engineering portal
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            numquam provident cum, fugit, rerum iste voluptates, nulla
            repudiandae mollitia similique dignissimos temporibus suscipit
            deleniti facilis! Porro obcaecati voluptatibus iste nesciunt! Hello
            from Cloud IT Engineering portal Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aspernatur numquam provident cum,
            fugit, rerum iste voluptates, nulla repudiandae mollitia similique
            dignissimos temporibus suscipit deleniti facilis! Porro obcaecati
            voluptatibus iste nesciunt! Hello from Cloud IT Engineering portal
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            numquam provident cum, fugit, rerum iste voluptates, nulla
            repudiandae mollitia similique dignissimos temporibus suscipit
            deleniti facilis! Porro obcaecati voluptatibus iste nesciunt!
          </h1>
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
