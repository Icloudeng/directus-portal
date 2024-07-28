import { MDWithAsset, ST_Video, STemplates_Props } from '@packages/contracts';

import cn from '@/lib/cn';

import { HasMediaPlayer } from '@/components/ui/HasMediaPlayer';

export function ST_VideosFC({ items }: STemplates_Props<ST_Video>) {
  return (
    <div className='flex flex-col space-y-4'>
      {items.map((item) => (
        <STVideo key={item.item.id} item={item} />
      ))}
    </div>
  );
}

function STVideo(props: { item: ST_Video }) {
  const item = props.item.item;

  return <HasPlayer media={item.video_file} media_url={item.video_url} />;
}

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
