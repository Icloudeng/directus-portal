import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { useTranslation } from 'next-i18next';
import { CleanHero } from '@/components/layout/footer/CleanHero';
import { BlingCard } from '@/components/ui/cards/BlingCard';

export default function Page() {
  const { t } = useTranslation();
  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={t('Blog')} />
      <CleanHero title={'Blog'} />

      <div className='bg-[#f5f7fa] pb-9 pt-5'>
        <div className='x-container'>
          <div className='grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 gap-5'>
            <BlingCard
              title='Acquisitions 2021'
              text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
              cardLink='#'
              cardColor='#86efac'
              shareIconColor='#4ade80'
              imgLink='https://flowbite.com/docs/images/blog/image-1.jpg'
            />
            <BlingCard
              title='Acquisitions technology'
              text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
              cardLink='#'
              cardColor='#67e8f9'
              shareIconColor='#22d3ee'
              imgLink='https://flowbite.com/docs/images/blog/image-2.jpg'
            />
            <BlingCard
              cardWidth='sd:col-span-2 sm:col-span-1'
              title='Noteworthy technology'
              text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
              cardLink='#'
              cardColor='#a5b4fc'
              shareIconColor='#818cf8'
              imgLink='https://flowbite.com/docs/images/blog/image-3.jpg'
            />
            <BlingCard
              // cardWidth="col-span-2"
              title='Noteworthy technology acquisitions 2021'
              text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
              cardLink='#'
              cardColor='#d8b4fe'
              shareIconColor='#c084fc'
              imgLink='https://flowbite.com/docs/images/blog/image-4.jpg'
            />
            <BlingCard
              cardWidth='md:col-span-2'
              title='Noteworthy technology'
              text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
              cardLink='#'
              cardColor='#fda4af'
              shareIconColor='#fb7185'
              imgLink='https://flowbite.com/docs/images/blog/image-2.jpg'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
    },
  };
}
