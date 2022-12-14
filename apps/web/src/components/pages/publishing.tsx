import { MDBlog, MDNews } from '@apps/contracts';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { FaRegShareSquare } from 'react-icons/fa';

import { COMPANY_NAME } from '@/app/constant/env';
import { useSharedData } from '@/app/store';
import { toLocaleDateString } from '@/app/utils/helpers';
import { useMut } from '@/cms/mut';

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
  const author = item.author;
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
          <div className='item--content-wrapper flex py-10 w-full md:mt-10'>
            <div className='w-[110px] pt-1 md:block hidden'>
              <div className='mb-3'>
                <span className='capitalize bg-primary-500 text-white p-1 rounded-md text-xs'>
                  {t(type)}
                </span>
              </div>

              <div className='text-2xl'>
                <FaRegShareSquare
                  onClick={onWebShare}
                  className='text-gray-600 cursor-pointer'
                />
              </div>
            </div>
            <div className='item--content sm:w-10/12'>
              {/* Author */}
              <div className='flex justify-between'>
                <div className='flex sm:items-center sm:flex-row flex-col item--author flex-1'>
                  <div className='flex justify-between'>
                    <div className='flex-1'>
                      <div className='bg-gray-100 w-16 h-16 relative rounded-[50%]'>
                        {(author?.image || CompanyDetails?.logo) && (
                          <Image
                            src={
                              author?.image?.src ||
                              CompanyDetails?.logo?.src ||
                              ''
                            }
                            className='w-full h-full rounded-[50%]'
                            layout='fill'
                            objectFit='cover'
                          />
                        )}
                      </div>
                    </div>
                    <Share
                      className='flex sm:hidden'
                      onWebShare={onWebShare}
                      type={type}
                    />
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

                <Share
                  className='hidden sm:flex md:hidden'
                  onWebShare={onWebShare}
                  type={type}
                />
              </div>

              {/* Content */}
              <div className='mt-8'>
                <h1 className='mb-16'>{translations?.title}</h1>
                {item.image && (
                  <Link
                    href={item.image?.src || ''}
                    target='_blank'
                    className='relative w-full h-[284px] sm:h-[384px] lg:h-[484px] mb-16 block'
                  >
                    <Image
                      src={item.image?.src || ''}
                      height={item.image.height}
                      width={item.image.width}
                      layout='fill'
                      className='w-full h-full'
                      objectFit='cover'
                    />
                  </Link>
                )}
                <p className='mb-10'>{translations?.summary}</p>
                <div className='prose md:prose-lg lg:prose-xl mb-4 w-full'>
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

function Share({
  type,
  onWebShare,
  className = 'flex md:hidden',
}: {
  type: string;
  onWebShare: any;
  className: string;
}) {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <div>
        <span className='capitalize bg-primary-500 text-white p-1 rounded-md text-xs'>
          {t(type)}
        </span>
      </div>
      <span className='text-2xl ml-3'>
        <FaRegShareSquare
          onClick={onWebShare}
          className='text-gray-600 cursor-pointer'
        />
      </span>
    </div>
  );
}
