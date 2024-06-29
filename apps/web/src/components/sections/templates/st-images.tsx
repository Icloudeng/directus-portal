import { ST_Image, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';

export function ST_ImagesFC({ items }: STemplates_Props<ST_Image>) {
  return (
    <div className='flex flex-col space-y-4'>
      {items.map((item) => (
        <STImage key={item.item.id} item={item} />
      ))}
    </div>
  );
}

function STImage(props: { item: ST_Image }) {
  const item = props.item.item;

  return (
    <div className='w-full p-4 h-[15rem] ss:h-[27rem] md:h-[37rem] relative'>
      <Image
        className='image object-cover object-center'
        src={item.image?.src || ''}
        layout='fill'
        objectFit='cover'
        alt='ST Image'
        loading='lazy'
      />
    </div>
  );
}
