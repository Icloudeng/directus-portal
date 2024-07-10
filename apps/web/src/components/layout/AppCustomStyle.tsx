/* eslint-disable */
import { useSharedData } from '@/app/store';

// @ts-ignore
import { paletten } from 'paletten';

export function AppCustomStyle() {
  const { SiteLayout } = useSharedData();

  let customColor = '';
  if (SiteLayout?.primary_color) {
    const shades = paletten(SiteLayout?.primary_color, { format: 'rgb' });

    customColor = Object.keys(shades)
      .reduce((acc, key, index, arr) => {
        const xIndex = arr[index + 1] as any;

        if (xIndex) {
          const v = shades[xIndex].replace(/(rgb\(|,|\))/gi, '');

          acc.push(`--tw-color-primary-${key}: ${v};`);
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
