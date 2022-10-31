import { useHasMounted } from '@/app/hooks/useHasMounted';
import { MDWithAsset } from '@/types/directus';
import ReactPlayer from 'react-player';
import { PlyrReact } from './plyr-react';
import Skeleton from './Skeleton';
import Image from 'next/image';

export function HasMediaPlayer({
  media_url,
  media,
}: {
  media_url: string | undefined;
  media: MDWithAsset | undefined;
}) {
  const { mounted } = useHasMounted();
  const showVideo = media?.type?.startsWith('video') ? media.src : media_url;
  const hasVideo = showVideo && mounted;
  return (
    <>
      {hasVideo &&
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
    </>
  );
}
