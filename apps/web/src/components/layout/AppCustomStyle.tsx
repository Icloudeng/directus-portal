import { shadesOf } from 'tw-shades';

import { useSharedData } from '@/app/store';

export function AppCustomStyle() {
  const { SiteLayout } = useSharedData();

  let customColor = '';
  if (SiteLayout?.primary_color) {
    const shades = shadesOf(SiteLayout?.primary_color, { format: 'rgb' });

    customColor = Object.keys(shades)
      .reduce((acc, key, index, arr) => {
        if (arr[index + 1]) {
          acc.push(`--tw-color-primary-${key}: ${shades[+arr[index + 1]]};`);
        }
        return acc;
      }, [] as string[])
      .join('\n');
  }

  return (
    <>
      {SiteLayout?.site_background_color && (
        <style jsx global>{`
          .prose {
            --tw-prose-pre-bg: ${SiteLayout?.site_background_color};
          }

          :root {
            ${customColor}
          }
        `}</style>
      )}
    </>
  );
}
