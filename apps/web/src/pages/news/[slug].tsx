import { GetServerSidePropsContext } from 'next';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlNewsBySlug } from '@/cms/items';
import { MDNews } from '@/cms/items/types';
import { useTranslation } from 'next-i18next';
import { FaRegShareSquare } from 'react-icons/fa';
import { toLocaleDateString } from '@/app/utils/helpers';
import Image from 'next/legacy/image';
import { useMut } from '@/cms/mut';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

export default function Page({ news }: { news: MDNews }) {
  const { t } = useTranslation();
  const author = news.author ? news.author[0].item : undefined;
  const { translations } = useMut(news);

  return (
    <Layout whiteNav={true}>
      <Seo
        templateTitle={translations?.title}
        image={news.image?.src}
        suffix={t('TOPBAR_NEWS')}
        description={translations?.summary}
        keywords={news.tags || []}
      />
      <div className='bg-white '>
        <div className='x-container'>
          <div className='py-5 w-full'>
            <span className='capitalize bg-primary-500 text-white p-1 rounded-md text-xs'>
              {t('TOPBAR_NEWS')}
            </span>
          </div>

          <div className='news--content-wrapper flex py-10 w-full'>
            <div className='w-[110px] pt-4 md:block hidden'>
              <span className='text-2xl'>
                <FaRegShareSquare className='text-gray-600' />
              </span>
            </div>
            <div className='news--content sm:w-10/12'>
              {/* Author */}
              <div className='flex sm:items-center sm:flex-row flex-col news--author'>
                <div className='bg-gray-100 w-16 h-16 relative rounded-[50%]'>
                  {author?.image && (
                    <Image
                      src={author?.image.src!}
                      className='w-full h-full rounded-[50%]'
                      layout='fill'
                      objectFit='cover'
                    />
                  )}
                </div>
                <div className='sm:ml-5'>
                  <div className='text-lg font-semibold'>
                    {author ? author.name : 'Icloudeng'}{' '}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {toLocaleDateString(news.date_created)}{' '}
                    {news.date_updated
                      ? '| ' +
                        t('Updated') +
                        ' ' +
                        toLocaleDateString(news.date_updated)
                      : ''}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='mt-8'>
                <h1 className='mb-16'>{translations?.title}</h1>
                {news.image && (
                  <div className='relative w-full mb-16'>
                    <Image
                      src={news.image.src!}
                      height={news.image.height}
                      width={news.image.width}
                      layout='responsive'
                      className='w-full h-auto'
                    />
                  </div>
                )}
                <p className='mb-10'>{translations?.summary}</p>
                <div className='markdown__content default__typo mb-4 w-full'>
                  <MarkdownContent>
                    {translations?.markdown_content || ''}
                  </MarkdownContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: GetServerSidePropsContext) {
  const slug = query.slug as string;
  const res = await getGqlNewsBySlug(slug).catch(console.error);

  if (!res || !res.data || res.data.news.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale!)),
      news: res.data.news[0],
    },
  };
}
