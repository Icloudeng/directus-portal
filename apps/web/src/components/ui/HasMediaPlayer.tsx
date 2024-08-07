import { MDWithAsset } from '@packages/contracts';
import Image from 'next/legacy/image';
import ReactPlayer from 'react-player';

import { useHasMounted } from '@/app/hooks/useHasMounted';

import { PlyrReact } from './plyr-react';
import Skeleton from './Skeleton';

export function HasMediaPlayer({
  media_url,
  media,
}: {
  media_url: string | undefined;
  media: MDWithAsset | undefined;
}) {
  const { mounted } = useHasMounted();
  const video = media?.type?.startsWith('video') ? media.src : undefined;
  const showVideo = media_url ? media_url : video;
  const hasVideo = showVideo && mounted;
  return (
    <>
      {hasVideo &&
        (media_url ? (
          <ReactPlayer
            controls={true}
            fallback={
              <Skeleton className='absolute inset-0 text-primary-500 rounded-xl -z-[1]' />
            }
            url={showVideo}
            width='100%'
            height='100%'
          />
        ) : (
          <PlyrReact
            source={{
              type: 'video',
              sources: [{ src: showVideo, type: media?.type }],
            }}
          />
        ))}

      {media?.type?.startsWith('image') && (
        <Image
          className='image object-cover w-full h-hull'
          src={media?.src || ''}
          layout='fill'
          objectFit='cover'
          alt='cover'
        />
      )}
    </>
  );
}
