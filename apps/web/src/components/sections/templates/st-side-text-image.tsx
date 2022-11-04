import { useMut } from '@/cms/mut';
import { STemplates_Props, ST_SideTextImage } from '@/cms/page-sections';
import { HasSvgText } from '@/components/ui/HasSvgText';
import ButtonLink from '@/components/ui/links/ButtonLink';

export function ST_SideTextImageFC({
  items,
}: STemplates_Props<ST_SideTextImage>) {
  return items.map((data) => {
    return <Content {...data} key={data.item.id} />;
  });
}

function Content({ item }: ST_SideTextImage) {
  const { translations, image, image_svg, disposition } = useMut(item);
  const buttons = translations?.buttons || [];

  const buttonNode = (
    <>
      {buttons.length > 0 && (
        <div className='mt-9 flex flex-wrap justify-center gap-3'>
          {buttons.map((btn, i) => {
            return (
              <div key={i}>
                <ButtonLink
                  href={btn.url}
                  className='px-7 py-3'
                  variant={btn.variant}
                  target={btn.external ? '_blank' : undefined}
                >
                  {btn.name}
                </ButtonLink>
              </div>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <div
      className={`flex  lg:justify-between ${
        disposition === 'text_right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } flex-col mb-5`}
    >
      <div className='lg:items-start w-full lg:mx-0 lg:w-1/2 justify-center flex items-center flex-col mx-auto'>
        <h1 className='lg:text-start text-center leading-10 text-[30px] md:text-[40px] font-bold'>
          {translations?.title}
        </h1>
        <div className='mt-[30px]'>
          <p className='lg:text-start text-center text-[18px] ss:text-[20px] font-light leading-[1.64]'>
            {translations?.description}
          </p>
        </div>
        <div className='hidden lg:block'>{buttonNode}</div>
      </div>

      <HasSvgText
        fallback={<img className='w-full h-auto' src={image.src} />}
        svgText={image_svg}
        className='lg:w-1/2 w-full st_flexible_icon mt-4 ml-5'
      />
      <div className='block lg:hidden'>{buttonNode}</div>
    </div>
  );
}
