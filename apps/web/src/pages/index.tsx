import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { PageSections } from '@/components/sections/page-sections';
import { SectionBoilerplate } from '@/components/sections/section-boilerplate';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlHomeQueries, QHomeHeroQueriesType } from '@/cms/items';
import { LeftRightContent } from '@/components/sections/more-ui/LeftRightContent';
import { BlogTextContentHorizontal } from '@/components/sections/more-ui/BlogTextContentHorizontal';
import { BlogTextContentVertical } from '@/components/sections/more-ui/BlogTextContentVertical';
import { TopLeftRightContent } from '@/components/sections/more-ui/TopLeftRight';
import { FooterOne } from '@/components/sections/more-ui/footers/FooterOne';
import { FooterTwo } from '@/components/sections/more-ui/footers/FooterTwo';
import { FooterThree } from '@/components/sections/more-ui/footers/FooterThree';

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
        <LeftRightContent />
      </section>
      <section className='py-10 bg-white'>
        <TopLeftRightContent />
      </section>
      <FooterOne />
      <section className='py-10 bg-[#f5f7fa]'>
        <BlogTextContentVertical />
      </section>
      <FooterTwo />
      <section className='py-10 bg-white'>
        <BlogTextContentHorizontal />
        <FooterThree />
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
