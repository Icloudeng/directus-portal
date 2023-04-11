import { GetStaticPropsContext } from 'next';
import Link from 'next/link';

import { BlogTextContentHorizontal } from '@/components/sections/more-ui/BlogTextContentHorizontal';
import { BlogTextContentVertical } from '@/components/sections/more-ui/BlogTextContentVertical';
import { TopLeftRightContent } from '@/components/sections/more-ui/TopLeftRight';

import { getServerSideTranslations } from '@/app/utils/server-translation';

export default function Page() {
  return (
    <div>
      <h1 className='mb-10'>
        <Link href='/'>Templates</Link>
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
