import { GetStaticPropsContext } from 'next';
import { SectionBoilerplate } from '@/components/sections/section-boilerplate';
import { getServerSideTranslations } from '@/app/utils/server-translation';
import { TopLeftRightContent } from '@/components/sections/more-ui/TopLeftRight';
import { BlogTextContentVertical } from '@/components/sections/more-ui/BlogTextContentVertical';
import { BlogTextContentHorizontal } from '@/components/sections/more-ui/BlogTextContentHorizontal';

export default function Page() {
  return (
    <div>
      <h1 className='mb-10'>
        <a href='/'>Templates</a>
      </h1>

      <section className='py-10 bg-white'>
        <TopLeftRightContent />
      </section>
      <section className='py-10 bg-[#f5f7fa]'>
        <BlogTextContentVertical />
      </section>
      <section className='py-10 bg-white'>
        <BlogTextContentHorizontal />
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
    },
  };
}
