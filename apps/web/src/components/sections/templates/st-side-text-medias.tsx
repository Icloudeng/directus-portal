import { useMut } from '@/cms/mut';
import { STemplates_Props, ST_SideTextMedia } from '@apps/contracts';
import { HasMediaPlayer } from '@/components/ui/HasMediaPlayer';
import ButtonLink from '@/components/ui/links/ButtonLink';

export function ST_SideTextMediasFC({
  items,
}: STemplates_Props<ST_SideTextMedia>) {
  return (
    <>
      {items.map((data) => {
        return <Content {...data} key={data.item.id} />;
      })}
    </>
  );
}

function Content({ item }: ST_SideTextMedia) {
  const { translations, media, media_url, disposition, sided } = useMut(item);
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
      className={`flex lg:justify-between ${
        sided
          ? disposition === 'text_right'
            ? 'lg:flex-row-reverse'
            : 'lg:flex-row'
          : 'lg:items-center'
      } flex-col mb-5 lg:gap-6`}
    >
      <div
        className={`${
          sided ? 'lg:w-1/2 lg:items-start' : 'lg:w-4/5'
        } w-full lg:mx-0 justify-center flex items-center flex-col mx-auto`}
      >
        <h1
          className={`${
            sided ? 'lg:text-start' : ''
          } text-center leading-10 text-[30px] md:text-[40px] font-bold`}
        >
          {translations?.title}
        </h1>
        <div className='mt-[30px]'>
          <p
            className={`${
              sided ? 'lg:text-start' : ''
            } text-center text-[18px] ss:text-[20px] font-light leading-[1.64]`}
          >
            {translations?.description}
          </p>
        </div>
        <div className={`${sided ? 'lg:block' : ''} hidden`}>{buttonNode}</div>
      </div>

      <div
        className={`${
          sided ? 'lg:w-1/2' : 'lg:w-4/5'
        } relative w-full mt-4 lg:flex video-plyr h-[15rem] ss:min-h-[27rem] md:min-h-[29rem] `}
      >
        <HasMediaPlayer media={media} media_url={media_url} />
      </div>

      <div className={`${sided ? 'lg:hidden' : ''} block`}>{buttonNode}</div>
    </div>
  );
}
