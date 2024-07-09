import { ST_SimpleCardLink, STemplates_Props } from '@apps/contracts';

import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { useMut } from '@/cms/mut';

export function ST_SimpleCardLinksFC({
  items,
}: STemplates_Props<ST_SimpleCardLink>) {
  return (
    <div className='flex justify-center items-stretch relative flex-wrap'>
      {items.map((data) => {
        return <CardLink key={data.item.id} {...data} />;
      })}
    </div>
  );
}

function CardLink({ item }: ST_SimpleCardLink) {
  const { translations } = useMut(item);
  return (
    <UnstyledLink
      href={item.url}
      target={item.external ? '_blank' : undefined}
      rel='noreferrer'
      className='sm__card-link w-full border lg:w-[calc(25%_-_20px)] hover:shadow-lg sd:w-[calc(50%_-_20px)] bg-white mx-[10px] mt-0 mb-[20px] p-[20px] lg:py-[23px] lg:px-[30px] transition-all flex flex-col rounded-[2px] relative items-center justify-start'
    >
      <div className='flex h-full justify-start flex-col items-center'>
        <div className='lg:max-h-[400px] max-h-[500px] mb-[15px] min-h-[115px] w-full'>
          <h3 className='text-[20px] xl:text-[26px] xl:mt-[6px] leading-[1.3] font-medium text-[#1d2330] mb-[22px]'>
            {translations?.title}
          </h3>
          <div className='text-[12px] text-[#446086] min-h-[63px]'>
            {translations?.description}
          </div>
        </div>

        <div className='mt-auto w-full'>
          <Button variant='outline' className='w-full text-center block'>
            {translations?.button_text}
          </Button>
        </div>
      </div>
    </UnstyledLink>
  );
}
