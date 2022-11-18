import Head from 'next/head';
import { useRouter } from 'next/router';

import { useMut } from '@/cms/mut';
import { MDPage } from '@/cms/items/types';
import { useSharedData } from '@/app/store';

const defaultMeta = {
  title: 'Icloudeng',
  siteName: 'Icloudeng',
  description:
    'Cloud IT Engineering LTD, a giant cloud computing solution provider',
  url: 'https://coding.icloudeng.xyz',
  type: 'website',
  robots: 'follow, index',
  image: '/images/icloudeng-banner.jpg',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  dynamicPage?: MDPage;
  suffix?: string;
} & Partial<typeof defaultMeta>;

export default function Seo({ dynamicPage, ...props }: SeoProps) {
  const router = useRouter();
  const page = useMut(dynamicPage);
  const shared = useSharedData();

  const $title = page?.translations?.title;
  const $description = page?.translations?.description;
  const $image = page?.image;

  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = shared?.CompanyDetails?.website_title || meta.title;
  meta.siteName = shared?.CompanyDetails?.website_title || meta.siteName;

  meta['title'] =
    $title || props.templateTitle
      ? `${$title || props.templateTitle} | ${meta.siteName}${
          meta.suffix ? ' ' + meta.suffix : ''
        }`
      : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={$description || meta.description} name='description' />
      <link rel='canonical' href={`${meta.url}${page?.url || router.asPath}`} />
      {page?.keywords && page.keywords.length > 0 && (
        <meta name='keywords' content={page.keywords.join(', ')} />
      )}
      {/* Open Graph */}
      <meta
        property='og:url'
        content={`${meta.url}${page?.url || router.asPath}`}
      />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta
        property='og:description'
        content={$description || meta.description}
      />
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
      <meta
        name='twitter:description'
        content={$description || meta.description}
      />
      <meta name='twitter:image' content={$image?.src || meta.image} />
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
            content='Cloud IT Engineering LTD'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
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

// generate favicon from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/images/icloudenglogo.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
