import { useSharedData } from '@/app/store';
import Image from 'next/legacy/image';
import pako from 'pako';
import React from 'react';

type Props = { value: string; type: string };

const encode = (source: string) => {
  // @ts-ignore
  const data = new TextEncoder('utf-8').encode(source);

  // @ts-ignore
  const compressed = [...pako.deflate(data, { level: 9 })]
    .map((x) => String.fromCharCode(x))
    .join('');

  return btoa(compressed).replace(/\+/g, '-').replace(/\//g, '_');
};

const KrokiDiagram = React.memo(({ value, type }: Props) => {
  const { Kroki } = useSharedData();
  const server = Kroki?.kroki_server || 'https://kroki.io';
  const src = `${server}/${type}/svg/${encode(value)}`;

  return (
    <Image
      src={src}
      width='0'
      height='0'
      alt={type}
      sizes='100vw'
      className='w-full h-auto'
      objectFit='contain'
    />
  );
});

KrokiDiagram.displayName = 'KrokiDiagram';

export default KrokiDiagram;
