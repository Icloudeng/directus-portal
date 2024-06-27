import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

import * as Sts from '@/components/sections/templates';
import Button from '@/components/ui/buttons/Button';
import UnderlineLink from '@/components/ui/links/UnderlineLink';

import {
  DumpBecomePartnerForms,
  DumpButton,
  DumpCardCarousel,
  DumpCardContent,
  DumpCardImageCarousel,
  DumpCards,
  DumpCleanHero,
  DumpCompanyDetails,
  DumpGallery,
  DumpGroupedLogos,
  DumpGuestQuestions,
  DumpHoverableMediaMenus,
  DumpIframe,
  DumpLatestBlog,
  DumpLatestNews,
  DumpLeftRightContent,
  DumpMaps,
  DumpMarkdown,
  DumpMediaTabs,
  DumpNavAccordion,
  DumpNavTab,
  DumpPageAsideMenus,
  DumpPlansPricing,
  DumpPlatforms,
  DumpRichText,
  DumpSidedContent,
  DumpSideTextMedias,
  DumpSimpleCard,
  DumpSimpleCardLink,
  DumpStreamableCards,
  DumpTestimonials,
  DumpTimelineRanges,
  DumpTransformedImageCarousels,
  DumpValue,
  getDumpChart,
} from '@/app/fixtures/templates-fixtures';
import { getServerSideTranslations } from '@/app/utils/server-translation';

type Template = {
  title: string;
  content: (title: string) => React.ReactNode;
};
const urlSafe = (text: string) => text.toLowerCase().split(' ').join('-');

const templates: Template[] = [
  {
    title: 'ST CardCarousels',
    content(title) {
      return (
        <section className='py-10 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {' '}
            {title}
          </h3>
          <Sts.ST_CardCarouselsFC
            items={DumpCardCarousel}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST CardImageCarousels',
    content(title) {
      return (
        <section className='py-10 mb-20 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_CardImageCarouselsFC
            items={DumpCardImageCarousel}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST CleanHeros',
    content(title) {
      return (
        <section className='py-10 mb-20 hero---seection relative'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9 text-center'
          >
            {title}
          </h3>
          <Sts.ST_CleanHerosFC
            items={DumpCleanHero}
            sectionClass='hero---seection'
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST NavAccordions',
    content(title) {
      return (
        <section className='py-10 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_NavAccordionsFC
            items={DumpNavAccordion}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST SidedContents',
    content(title) {
      return (
        <section className='py-10 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_SidedContentsFC
            items={DumpSidedContent}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Values',
    content(title) {
      return (
        <section className='py-10 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}{' '}
          </h3>
          <Sts.ST_ValuesFC
            items={DumpValue}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST NavTabs',
    content(title) {
      return (
        <section className='py-10 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}{' '}
          </h3>
          <Sts.ST_NavTabsFC
            items={DumpNavTab}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Buttons',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}{' '}
          </h3>
          <Sts.ST_ButtonsFC
            items={DumpButton}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST SimpleCardLink',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_SimpleCardLinksFC
            items={DumpSimpleCardLink}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST MediaTabs',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}{' '}
          </h3>
          <Sts.ST_MediaTabsFC
            items={DumpMediaTabs}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST PageAsideMenus',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_PageAsideMenusFC
            items={DumpPageAsideMenus}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST StreamableCards',
    content(title) {
      return (
        <section className='py-14 overflow-hidden'>
          <div className='x-container'>
            <h3
              id={urlSafe(title)}
              className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
            >
              {title}
            </h3>
          </div>
          <Sts.ST_StreamableCardsFC
            items={DumpStreamableCards}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST HoverableMediaMenus',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_HoverableMediaMenusFC
            items={DumpHoverableMediaMenus}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST TransformedImageCarousels',
    content(title) {
      return (
        <section className='py-14'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9 '
          >
            {title}
          </h3>
          <Sts.ST_TransformedImageCarouselsFC
            items={DumpTransformedImageCarousels}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST PlansPricing',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_PlansPricingFC
            items={DumpPlansPricing}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Testimonials',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_TestimonialsFC
            items={DumpTestimonials}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Gallery',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_GalleryFC
            items={DumpGallery}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST GroupedLogos',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_GroupedLogosFC
            items={DumpGroupedLogos}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST BecomePartnerForms',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_BecomePartnerFormsFC
            items={DumpBecomePartnerForms}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST CompanyDetails',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_CompanyDetailsFC
            items={DumpCompanyDetails}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST TimelineRanges',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_TimelineRangesFC
            items={DumpTimelineRanges}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Cards',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_CardsFC items={DumpCards} sectionClass='' sharedObject={{}} />
        </section>
      );
    },
  },
  {
    title: 'ST GuestQuestions',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_GuestQuestionsFC
            items={DumpGuestQuestions}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Platforms',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_PlatformsFC
            items={DumpPlatforms}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST SideTextMedias',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_SideTextMediasFC
            items={DumpSideTextMedias}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Latest News',
    content(title) {
      return (
        <section className='py-14 bg-[#f5f7fa]'>
          <div className='x-container'>
            <h3
              id={urlSafe(title)}
              className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
            >
              {title}
            </h3>
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
      );
    },
  },
  {
    title: 'ST Latest Blog',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
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
      );
    },
  },
  {
    title: 'ST Markdown',
    content(title) {
      return (
        <section className='py-14  x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_MarkdownFC
            items={DumpMarkdown}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Rich Text',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_RichTextFC
            items={DumpRichText}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Charts',
    content(title) {
      return (
        <section className='py-14 x-container-fluid'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>

          <div className='flex mb-7'>
            <div className='w-1/2 pr-4'>
              <h4 className='mb-4'>Line</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('line')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
            <div className='w-1/2 pl-4'>
              <h4 className='mb-4'>Bar</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('bar')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
          </div>

          <div className='flex mb-7'>
            <div className='w-1/2 pr-4'>
              <h4 className='mb-4'>Bar (Horizontal)</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('bar_horizontal')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
            <div className='w-1/2 pl-4'>
              <h4 className='mb-4'>Bar (Stacked)</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('bar_stacked')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
          </div>

          <div className='flex mb-7'>
            <div className='w-1/2 pr-4'>
              <h4 className='mb-4'>Bar (Horizontal + Stacked)</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('bar_horizontal_stacked')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
            <div className='w-1/2 pl-4'>
              <h4 className='mb-4'>Area</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('area')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
          </div>

          <div className='flex mb-7'>
            <div className='w-1/2 pr-4'>
              <h4 className='mb-4'>Bubble</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('bubble')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
            <div className='w-1/2 pl-4'>
              <h4 className='mb-4'>Steam</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('steam')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
          </div>

          <div className='flex mb-7'>
            <div className='w-1/2 pr-4'>
              <h4 className='mb-4'>Spark Chart</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('spark_chart')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
            <div className='w-1/2 pl-4'>
              <h4 className='mb-4'>Band</h4>
              <Sts.ST_ChartsFC
                items={getDumpChart('band')}
                sectionClass=''
                sharedObject={{}}
              />
            </div>
          </div>
        </section>
      );
    },
  },
  {
    title: 'ST Left Right Contents',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_LeftRightContentsFC
            items={DumpLeftRightContent}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
  {
    title: 'ST Maps',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_MapsFC items={DumpMaps} sectionClass='' sharedObject={{}} />
        </section>
      );
    },
  },

  {
    title: 'ST Iframe',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_IframeFC
            items={DumpIframe}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },

  {
    title: 'ST Simple Card',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>
          <Sts.ST_SimpleCardsFC
            items={DumpSimpleCard}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },

  {
    title: 'ST Card Content',
    content(title) {
      return (
        <section className='py-14 x-container'>
          <h3
            id={urlSafe(title)}
            className='sticky top-8 z-50 bg-white p-2 inline-block text-primary-400 my-9'
          >
            {title}
          </h3>

          <Sts.ST_CardContentsFC
            items={DumpCardContent}
            sectionClass=''
            sharedObject={{}}
          />
        </section>
      );
    },
  },
];

const grouped = templates.reduce((acc, template) => {
  const last = acc[acc.length - 1];
  if (!last || last.length >= 5) {
    acc.push([template]);
  } else {
    last.push(template);
  }
  return acc;
}, [] as Template[][]);

export default function Page() {
  return (
    <div>
      <div className='x-container'>
        <h1>
          <Link href='/'>Templates ({templates.length})</Link>
        </h1>
        <div className='flex flex-wrap my-3'>
          {grouped.map((list, i) => {
            return (
              <ul key={i} className='mr-6 mb-12'>
                {list.map((tmp, k) => {
                  return (
                    <li key={k}>
                      <a
                        className='underline leading-8'
                        href={'#' + urlSafe(tmp.title)}
                      >
                        {tmp.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      {templates.map((tmp, i) => {
        return (
          <React.Fragment key={i}>
            {tmp.content(tmp.title)}
            <hr className='my-20' />
          </React.Fragment>
        );
      })}

      <Button
        className='fixed bottom-5 right-12'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <BsArrowUp />
      </Button>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await getServerSideTranslations(locale as string)),
    },
  };
}
