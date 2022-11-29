import { GetServerSidePropsContext } from 'next';

import * as Sts from '@/components/sections/templates';
import UnderlineLink from '@/components/ui/links/UnderlineLink';

import {
  DumpBecomePartnerForms,
  DumpButton,
  DumpCardCarousel,
  DumpCardImageCarousel,
  DumpCards,
  DumpCleanHero,
  DumpCompanyDetails,
  DumpGallery,
  DumpGroupedLogos,
  DumpGuestQuestions,
  DumpHoverableMediaMenus,
  DumpLatestBlog,
  DumpLatestNews,
  DumpMarkdown,
  DumpMediaTabs,
  DumpNavAccordion,
  DumpNavTab,
  DumpPageAsideMenus,
  DumpPlansPricing,
  DumpPlatforms,
  DumpSidedContent,
  DumpSideTextMedias,
  DumpSimpleCardLink,
  DumpStreamableCards,
  DumpTestimonials,
  DumpTimelineRanges,
  DumpTransformedImageCarousels,
  DumpValue,
} from '@/app/models/dumps-templates';
import { getServerSideTranslations } from '@/app/utils/server-translation';

export default function Page() {
  return (
    <div>
      <section className='py-10 x-container'>
        <h3 className='my-9'>ST CardCarousels </h3>
        <Sts.ST_CardCarouselsFC
          items={DumpCardCarousel}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 mb-20 x-container'>
        <h3 className='my-9'>ST CardImageCarousels </h3>
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
        <h3 className='my-9'>ST NavAccordions </h3>
        <Sts.ST_NavAccordionsFC
          items={DumpNavAccordion}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9'>ST SidedContents </h3>
        <Sts.ST_SidedContentsFC
          items={DumpSidedContent}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9'>ST Values </h3>
        <Sts.ST_ValuesFC items={DumpValue} sectionClass='' sharedObject={{}} />
      </section>

      <section className='py-10 x-container'>
        <h3 className='my-9'>ST NavTabs </h3>
        <Sts.ST_NavTabsFC
          items={DumpNavTab}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST Buttons </h3>
        <Sts.ST_ButtonsFC
          items={DumpButton}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST SimpleCardLink </h3>
        <Sts.ST_SimpleCardLinksFC
          items={DumpSimpleCardLink}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST MediaTabs </h3>
        <Sts.ST_MediaTabsFC
          items={DumpMediaTabs}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST PageAsideMenus </h3>
        <Sts.ST_PageAsideMenusFC
          items={DumpPageAsideMenus}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 overflow-hidden'>
        <div className='x-container'>
          <h3 className='my-9'>ST StreamableCards</h3>
        </div>
        <Sts.ST_StreamableCardsFC
          items={DumpStreamableCards}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST HoverableMediaMenus</h3>
        <Sts.ST_HoverableMediaMenusFC
          items={DumpHoverableMediaMenus}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14'>
        <h3 className='my-9 x-container'>ST TransformedImageCarousels</h3>
        <Sts.ST_TransformedImageCarouselsFC
          items={DumpTransformedImageCarousels}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST PlansPricing</h3>
        <Sts.ST_PlansPricingFC
          items={DumpPlansPricing}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST Testimonials</h3>
        <Sts.ST_TestimonialsFC
          items={DumpTestimonials}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST Gallery</h3>
        <Sts.ST_GalleryFC
          items={DumpGallery}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST GroupedLogos</h3>
        <Sts.ST_GroupedLogosFC
          items={DumpGroupedLogos}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST BecomePartnerForms</h3>
        <Sts.ST_BecomePartnerFormsFC
          items={DumpBecomePartnerForms}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST CompanyDetails</h3>
        <Sts.ST_CompanyDetailsFC
          items={DumpCompanyDetails}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST TimelineRanges</h3>
        <Sts.ST_TimelineRangesFC
          items={DumpTimelineRanges}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST Cards</h3>
        <Sts.ST_CardsFC items={DumpCards} sectionClass='' sharedObject={{}} />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST GuestQuestions</h3>
        <Sts.ST_GuestQuestionsFC
          items={DumpGuestQuestions}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST Markdown</h3>
        <Sts.ST_MarkdownFC
          items={DumpMarkdown}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST Platforms</h3>
        <Sts.ST_PlatformsFC
          items={DumpPlatforms}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14  x-container'>
        <h3 className='my-9'>ST SideTextMedias</h3>
        <Sts.ST_SideTextMediasFC
          items={DumpSideTextMedias}
          sectionClass=''
          sharedObject={{}}
        />
      </section>

      <section className='py-14 bg-[#f5f7fa]'>
        <div className='x-container'>
          <h3 className='my-9'>ST Latest News</h3>
          <h4 className='my-3 mb-5'>
            News Page:{' '}
            <UnderlineLink href='/news' className='text-primary-400'>
              /news
            </UnderlineLink>
          </h4>

          <Sts.ST_LatestNewsFC
            items={DumpLatestNews}
            sectionClass=''
            sharedObject={{}}
          />
        </div>
      </section>

      <section className='py-14 x-container'>
        <h3 className='my-9'>ST Latest News</h3>
        <h4 className='my-3 mb-5'>
          Blog Page:{' '}
          <UnderlineLink href='/blog' className='text-primary-400'>
            /blog
          </UnderlineLink>
        </h4>

        <Sts.ST_LatestBlogFC
          items={DumpLatestBlog}
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
