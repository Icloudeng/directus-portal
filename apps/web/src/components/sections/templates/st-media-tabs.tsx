import { mut } from '@/cms/mut';
import { STemplates_Props, ST_MediaTab } from '@/cms/page-sections';
import {
  MediaTabs,
  MediaTabsPane,
} from '@/components/ui/media-tabs/media-tabs';
import { PlyrReact } from '@/components/ui/plyr-react';
import Skeleton from '@/components/ui/Skeleton';
import { useHasMounted } from '@/hooks/useHasMounted';
import { useSharedData } from '@/store';
import { MDWithAsset } from '@/types/directus';
import Image from 'next/image';
import ReactPlayer from 'react-player';

function HasMediaPlayer({
  media,
  media_url,
}: {
  media_url: string | undefined;
  media: MDWithAsset | undefined;
}) {
  const { mounted } = useHasMounted();

  if (!media && !media_url) {
    return <></>;
  }
  const showVideo = media?.type?.startsWith('video') ? media.src : media_url;

  return (
    <div className='video-wrapper w-full mb-5'>
      <div
        className={`video-container relative w-full ${
          !media?.src ? 'h-[15rem] ss:h-[27rem] md:h-[37rem]' : ''
        }  z-[1]`}
      >
        {showVideo &&
          mounted &&
          (media?.src ? (
            <PlyrReact
              source={{
                type: 'video',
                sources: [{ src: showVideo, type: media?.type }],
              }}
            />
          ) : (
            <ReactPlayer
              controls={true}
              fallback={
                <Skeleton className='absolute inset-0 text-primary-500 rounded-xl -z-[1]' />
              }
              url={showVideo}
              width='100%'
              height='100%'
            />
          ))}

        {media?.type?.startsWith('image') && (
          <Image
            className='image object-cover'
            src={media.src!}
            layout='fill'
            objectFit='cover'
            height='100%'
            width='100%'
          />
        )}
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
            <HasMediaPlayer
              media={translations?.media}
              media_url={translations?.media_url}
            />
          </MediaTabsPane>
        );
      })}
    </MediaTabs>
  );
}
