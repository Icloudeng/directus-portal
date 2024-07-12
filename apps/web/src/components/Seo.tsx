import { MDPage } from '@packages/contracts';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { COMPANY_NAME, WEBSITE_URL } from '@/app/constant/env';
import { useSharedData } from '@/app/store';
import { nextAsset } from '@/app/utils/next-asset';
import { useMut } from '@/cms/mut';

const defaultMeta = {
  title: 'Smatflow',
  siteName: 'Smatflow',
  description:
    (COMPANY_NAME || '') + 'a giant cloud computing solution provider',
  url: WEBSITE_URL || '',
  type: 'website',
  robots: 'follow, index',
  image: '/images/banner.jpg',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  dynamicPage?: MDPage;
  suffix?: string;
  keywords?: string[];
  pathname?: string;
} & Partial<typeof defaultMeta>;

export default function Seo({ dynamicPage, ...props }: SeoProps) {
  const router = useRouter();
  const page = useMut(dynamicPage);
  const sh = useSharedData();
  const shared = useSharedData() as unknown as typeof sh | undefined;
  const companyDetails = useMut(shared?.CompanyDetails);

  const $title = page?.translations?.title;
  const $description =
    page?.translations?.description || companyDetails?.translations?.slogan;
  const $image = page?.image;

  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = companyDetails?.website_title || meta.title;
  meta.siteName = companyDetails?.website_title || meta.siteName;

  meta['title'] =
    props.templateTitle || $title
      ? `${props.templateTitle || $title} | ${meta.siteName}${
          meta.suffix ? ' ' + meta.suffix : ''
        }`
      : meta.title;

  const keywords =
    page?.keywords && page.keywords.length > 0
      ? page.keywords
      : props.keywords && props.keywords.length > 0
      ? props.keywords
      : undefined;

  const url = `${meta.url}${page?.url || props.pathname || router.asPath}`;
  const description = $description || meta.description;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={description} name='description' />
      <link rel='canonical' href={url} />
      {keywords && <meta name='keywords' content={keywords.join(', ')} />}
      {/* Open Graph */}
      <meta property='og:url' content={url} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={$title || meta.title} />
      <meta property='og:image' content={$image?.src || meta.image} />
      {$image?.type && <meta property='og:image:type' content={$image?.type} />}
      {$image?.width && (
        <meta property='og:image:width' content={$image?.width.toString()} />
      )}
      {$image?.height && (
        <meta property='og:image:height' content={$image?.height.toString()} />
      )}
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={$title || meta.title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={meta.image || $image?.src} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content={COMPANY_NAME}
          />
        </>
      )}

      {/* Favicons */}
      {(
        [
          {
            rel: 'icon',
            href: nextAsset({
              url: companyDetails?.favicon?.src || companyDetails?.logo?.src,
              defaultUrl: '/images/logo.png',
              width: 75,
              height: 75,
            }),
          },
        ] as Favicons[]
      ).map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content={page?.theme_color || '#ffffff'} />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};
