import { getServerSideTranslations } from '@/utils/server-translation';
import { GetServerSidePropsContext } from 'next';
import * as Sts from '@/components/sections/templates';
import {
  DumpButton,
  DumpCardCarousel,
  DumpCardImageCarousel,
  DumpCleanHero,
  DumpNavAccordion,
  DumpNavTab,
  DumpSidedContent,
  DumpSimpleCardLink,
  DumpValue,
} from '@/models/dumps-templates';

export default function Page() {
  return (
    <div>
      <section className='py-10 x-container'>
        <h3 className='my-9 text-center'>ST CardCarousels </h3>
        <Sts.ST_CardCarouselsFC
          items={DumpCardCarousel}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 mb-20 x-container'>
        <h3 className='my-9 text-center'>ST CardImageCarousels </h3>
        <Sts.ST_CardImageCarouselsFC
          items={DumpCardImageCarousel}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 mb-20 hero---seection relative'>
        <h3 className='my-9 text-center'>ST CleanHeros </h3>
        <Sts.ST_CleanHerosFC
          items={DumpCleanHero}
          sectionClass='hero---seection'
          sharedObject={{}}
        />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9 text-center'>ST NavAccordions </h3>
        <Sts.ST_NavAccordionsFC
          items={DumpNavAccordion}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9 text-center'>ST SidedContents </h3>
        <Sts.ST_SidedContentsFC
          items={DumpSidedContent}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9 text-center'>ST Values </h3>
        <Sts.ST_ValuesFC items={DumpValue} sectionClass='' sharedObject={{}} />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9 text-center'>ST NavTabs </h3>
        <Sts.ST_NavTabsFC
          items={DumpNavTab}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9 text-center'>ST Buttons </h3>
        <Sts.ST_ButtonsFC
          items={DumpButton}
          sectionClass=''
          sharedObject={{}}
        />
      </section>
    </div>
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
