import { MDWithAsset } from '@/types/directus';
import Image from 'next/legacy/image';
import Link from 'next/link';

type Props = {
  title: string;
  summary?: string;
  date: string;
  link: string;
  image?: MDWithAsset;
};

export function NewsCard({ title, summary, date, image, link }: Props) {
  return (
    <Link
      href={link}
      className='news--wrapper flex flex-col items-stretch rounded-[2px] h-[550px] transition bg-white no-underline hover:shadow-lg'
    >
      <div className='news--image flex justify-start items-center shrink-0'>
        <div className='relative w-full h-[160px]'>
          <Image
            src={image ? image.src! : '/svg/news.svg'}
            className='w-full h-full'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>

      <div className='news--date text-sm leading-6 text-[#44608] pt-9 pr-0 pb-3 pl-8 '>
        {date}
      </div>

      <h3 className='news--title text-left text-3xl leading-10 text-[#1d2330] overflow-hidden h-[120px] py-0 px-8 sd:mb-6 text-ellipsis'>
        {title}
      </h3>

      <div className='news--summary py-0 px-8 text-lg leading-7 text-[#1d2330] max-h-28 overflow-hidden'>
        {summary}
      </div>
    </Link>
  );
}
