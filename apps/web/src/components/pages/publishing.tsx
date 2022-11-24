import { COMPANY_NAME, WEBSITE_URL } from '@/app/constant/env';
import { useSharedData } from '@/app/store';
import { toLocaleDateString } from '@/app/utils/helpers';
import { MDBlog, MDNews } from '@/cms/items/types';
import { useMut } from '@/cms/mut';
import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';
import { useCallback } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';
import Seo from '../Seo';
import { MarkdownContent } from '../ui/react-markdown/MarkdownContent';

export function Publishing({
  item,
  type,
}: {
  item: MDBlog | MDNews;
  type: 'TOPBAR_NEWS' | 'Blog';
}) {
  const { t } = useTranslation();
  const author = item.author ? item.author[0]?.item : undefined;
  const { translations } = useMut(item);
  const date = toLocaleDateString(item.date_created);
  const { CompanyDetails } = useSharedData();

  const onWebShare = useCallback(() => {
    navigator
      .share({
        title: CompanyDetails?.company_name || COMPANY_NAME,
        text: translations?.title,
        url: location.origin + location.pathname,
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Seo
        templateTitle={translations?.title}
        image={item.image?.src}
        suffix={t(type)}
        description={translations?.summary}
        keywords={item.tags || []}
        date={date}
      />
      <div className='bg-white '>
        <div className='x-container'>
          <div className='py-5 w-full flex'>
            <span className='capitalize bg-primary-500 text-white p-1 rounded-md text-xs'>
              {t(type)}
            </span>
            <span className='text-2xl ml-3 block md:hidden'>
              <FaRegShareSquare
                onClick={onWebShare}
                className='text-gray-600 cursor-pointer'
              />
            </span>
          </div>

          <div className='item--content-wrapper flex py-10 w-full'>
            <div className='w-[110px] pt-4 md:block hidden'>
              <span className='text-2xl'>
                <FaRegShareSquare
                  onClick={onWebShare}
                  className='text-gray-600 cursor-pointer'
                />
              </span>
            </div>
            <div className='item--content sm:w-10/12'>
              {/* Author */}
              <div className='flex sm:items-center sm:flex-row flex-col item--author'>
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
                    {author ? author.name : COMPANY_NAME}{' '}
                  </div>
                  <div className='text-sm text-gray-500'>
                    {date}{' '}
                    {item.date_updated
                      ? '| ' +
                        t('Updated') +
                        ' ' +
                        toLocaleDateString(item.date_updated)
                      : ''}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='mt-8'>
                <h1 className='mb-16'>{translations?.title}</h1>
                {item.image && (
                  <div className='relative w-full mb-16'>
                    <Image
                      src={item.image.src!}
                      height={item.image.height}
                      width={item.image.width}
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
    </>
  );
}
