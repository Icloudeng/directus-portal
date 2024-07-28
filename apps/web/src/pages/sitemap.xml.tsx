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
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${originUrl}</loc>
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

           return translations
             .map((translation) => {
               const code = translation.languages_code.code;
               const langPath = code === DEFAULT_LANG ? '' : `/${code}`;

               const pageUrl =
                 page.url[page.url.length - 1] === '/'
                   ? page.url.slice(0, page.url.length - 1)
                   : page.url;

               return `<url>
                        <loc>${`${originUrl + langPath}/${pageUrl}`}</loc>
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
