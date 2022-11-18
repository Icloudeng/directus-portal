import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { CleanHero } from '@/components/layout/footer/CleanHero';
import { useTranslation } from 'next-i18next';
import capitalize from 'lodash/capitalize';
import { InputSearch } from '@/components/ui/inputs/InputSearch';

export default function Page() {
  const { t } = useTranslation();
  const title = capitalize(t('TOPBAR_NEWS'));

  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={title} />
      <CleanHero
        title={title}
        noBottomSpace={true}
        description={t('Learn more about the our latest updates') + '.'}
      />

      <div className='bg-[#f5f7fa] pb-9 pt-5'>
        <div className='x-container'>
          <div className='mx-auto w-full sm:max-w-md'>
            <InputSearch withButton={true} />
          </div>

          <div className='mt-24'></div>
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
