import { MDPlatform } from '@packages/contracts';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';
import { HiOutlineLink } from 'react-icons/hi';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { HasSvgText } from '@/components/ui/HasSvgText';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { getServerSideTranslations } from '@/app/utils/server-translation';
import { getGqlPlatformsBySlug } from '@/cms/items';
import { useMut } from '@/cms/mut';

export default function Page({ platform }: { platform: MDPlatform }) {
  const {
    translations,
    icon_svg,
    icon,
    name,
    version,
    link,
    external_link,
    category: tcategory,
  } = useMut(platform);
  const category = useMut(tcategory);

  const { t } = useTranslation();

  return (
    <Layout whiteNav={true}>
      <Seo templateTitle={name} suffix='Apps' />
      <div className='min-h-[300px] bg-white pt-24'>
        <div className='x-container mb-10'>
          {/* Header */}
          <div className='p--header'>
            <div className='flex sd:items-center flex-col sd:flex-row'>
              <div className='w-24 h-24'>
                <HasSvgText
                  svgText={icon_svg}
                  className='st_flexible_icon'
                  fallback={
                    icon?.src && (
                      <Image
                        className='image object-cover w-full h-full'
                        src={icon.src}
                        layout='fill'
                        objectFit='fill'
                        alt={name}
                        loading='lazy'
                      />
                    )
                  }
                />
              </div>
              <div className='sd:ml-4 flex items-center'>
                <h1 className='text-gray-700 font-normal text-4xl mb-1 sd:mb-0'>
                  {name}
                </h1>
                {link && (
                  <UnstyledLink
                    href={link}
                    className='ml-2'
                    target={external_link ? '_blank' : undefined}
                  >
                    <HiOutlineLink />
                  </UnstyledLink>
                )}
              </div>
            </div>
            <div className='flex flex-col sd:flex-row'>
              <div className='w-28' />
              <div className='flex flex-col gap-1'>
                {version && (
                  <span className='mt-1'>
                    {t('Version')}: {version}
                  </span>
                )}
                <div className='mt-1'>
                  <span className='bg-primary-400/90 p-1 rounded-s text-white text-sm'>
                    {category?.translations?.name || category?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='p--content mt-20'>
            {translations?.description && (
              <div className='p--content-description mb-6'>
                <h5 className='font-semibold text-2xl mb-2'>
                  {t('Description')}
                </h5>
                <p>{translations?.description}</p>
              </div>
            )}

            {translations?.documentation && (
              <div className='p--content-documentation'>
                <h5 className='font-semibold text-2xl mb-2'>
                  {t('Documentation')}
                </h5>
                <div className='prose md:prose-lg w-full'>
                  <MarkdownContent>
                    {translations?.documentation || ''}
                  </MarkdownContent>
                </div>
              </div>
            )}
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
  const res = await getGqlPlatformsBySlug(slug).catch(console.error);

  if (!res || !res.data || res.data.platforms.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await getServerSideTranslations(locale as string)),
      platform: res.data.platforms[0],
    },
  };
}
