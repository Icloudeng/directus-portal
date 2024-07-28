import { ST_MediaTab, STemplates_Props } from '@packages/contracts';
import { MDWithAsset } from '@packages/contracts';

import cn from '@/lib/cn';

import { HasMediaPlayer } from '@/components/ui/HasMediaPlayer';
import {
  MediaTabs,
  MediaTabsPane,
} from '@/components/ui/media-tabs/media-tabs';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

function HasPlayer({
  media,
  media_url,
}: {
  media_url: string | undefined;
  media: MDWithAsset | undefined;
}) {
  if (!media && !media_url) {
    return <></>;
  }

  return (
    <div className='video-wrapper w-full mb-5'>
      <div
        className={cn(
          'video-container relative w-full',
          (!media?.src || media_url) && 'h-[15rem] ss:h-[27rem] md:h-[37rem]',
          'z-[1]'
        )}
      >
        <HasMediaPlayer media={media} media_url={media_url} />
      </div>
    </div>
  );
}

export function ST_MediaTabsFC({ items }: STemplates_Props<ST_MediaTab>) {
  const { locale } = useSharedData();

  return (
    <MediaTabs>
      {items.map((data) => {
        const { translations, disposition } = mut(data.item, locale);
        return (
          <MediaTabsPane
            key={data.item.id}
            menuTitle={translations?.tab_name || ''}
            title={translations?.title}
            description={translations?.description}
            disposition={disposition}
          >
            <HasPlayer
              media={translations?.media}
              media_url={translations?.media_url}
            />
          </MediaTabsPane>
        );
      })}
    </MediaTabs>
  );
}
