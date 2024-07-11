import { paletten } from 'paletten';

import { useSharedData } from '@/app/store';

export function AppCustomStyle() {
  const { SiteLayout } = useSharedData();

  let customStyleVariables = '';
  let customProseStyle = '';

  if (SiteLayout?.primary_color) {
    const shades = paletten(SiteLayout?.primary_color, { format: 'rgb' });

    customStyleVariables = Object.keys(shades)
      .reduce((acc, key, index, arr) => {
        const xIndex = arr[index + 1] as keyof typeof shades;

        if (xIndex) {
          const v = shades[xIndex].replace(/(rgb\(|,|\))/gi, '');

          acc.push(`--tw-color-primary-${key}: ${v};`);
        }
        return acc;
      }, [] as string[])
      .join('\n');

    // BG Main Color
    const bgColor = adjust(SiteLayout?.primary_color, -200) + 'd7';

    customStyleVariables += `\n--bg-main-color: ${bgColor};`;

    customProseStyle = `.prose { --tw-prose-pre-bg: ${bgColor}; }`;
  }

  return (
    <>
      <style jsx global>{`
        ${customProseStyle}
        :root {
          ${customStyleVariables}
        }
      `}</style>
    </>
  );
}

function adjust(color: string, amount: number) {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color: string) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}
