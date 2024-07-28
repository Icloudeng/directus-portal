import { MDPage } from '@packages/contracts';
import { GetServerSidePropsContext } from 'next';

import { DEFAULT_LANG, WEBSITE_URL } from '@/app/constant/env';
import { getGqlAllPages } from '@/cms/items';

function SiteMap() {
  console.log('SiteMap');
}

function generateSiteMap(
  pages: MDPage<false>[],
  locale: string,
  originUrl?: string
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html">
       <url>
         <loc>${originUrl}</loc>
         <priority>1</priority>
       </url>
       <url>
         <loc>${originUrl}/blog</loc>
       </url>
       <url>
         <loc>${originUrl}/news</loc>
       </url>
       ${pages
         .map((page) => {
           const translations = page.translations || [
             {
               languages_code: {
                 code: locale,
                 name: locale.toUpperCase(),
               },
             },
           ];

           const pageUrl =
             page.url[page.url.length - 1] === '/'
               ? page.url.slice(0, page.url.length - 1)
               : page.url;

           const xHtmlLinks =
             page.translations.length > 1
               ? page.translations
                   .map((translation) => {
                     const code = translation.languages_code.code;
                     const langPath = code === DEFAULT_LANG ? '' : `/${code}`;

                     return `<xhtml:link rel="alternate" hreflang="${code}" href="${
                       originUrl + langPath
                     }/-/${pageUrl}" />`;
                   })
                   .join('\n')
               : '';

           return translations
             .map((translation) => {
               const code = translation.languages_code.code;
               const langPath = code === DEFAULT_LANG ? '' : `/${code}`;

               return `<url>
                        <loc>${`${originUrl + langPath}/-/${pageUrl}`}</loc>
                        <lastmod>${
                          page.date_updated || page.date_created
                        }</lastmod>
                        ${xHtmlLinks}
                    </url>`;
             })
             .join('');
         })
         .join('')}
     </urlset>
   `;
}

export async function getServerSideProps({
  res,
  locale,
}: GetServerSidePropsContext) {
  const request = await getGqlAllPages();
  const pages = (request.data?.Pages || []).filter(Boolean) as MDPage<false>[];

  const originUrl = WEBSITE_URL;
  const LANG = locale || DEFAULT_LANG;

  const sitemap = generateSiteMap(pages, LANG, originUrl);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
