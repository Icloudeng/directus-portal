import { ST_SideTextMedia, STemplates_Props } from '@apps/contracts';

import clsxm from '@/lib/clsxm';

import { HasMediaPlayer } from '@/components/ui/HasMediaPlayer';
import ButtonLink from '@/components/ui/links/ButtonLink';

import { useMut } from '@/cms/mut';

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
      className={clsxm(
        `flex lg:justify-between flex-col mb-5 lg:gap-6`,
        sided && [
          disposition === 'text_right' ? 'lg:flex-row-reverse' : 'lg:flex-row',
        ],
        !sided && 'lg:items-center'
      )}
    >
      <div
        className={clsxm(
          `w-full lg:mx-0 justify-center flex items-center flex-col mx-auto`,
          sided ? 'lg:w-1/2 lg:items-start' : 'lg:w-4/5'
        )}
      >
        <h1
          className={clsxm(
            `text-center leading-10 text-[30px] md:text-[40px] font-bold`,
            sided && 'lg:text-start'
          )}
        >
          {translations?.title}
        </h1>
        <div className='mt-[30px]'>
          <p
            className={clsxm(
              `text-center text-[18px] ss:text-[20px] font-light leading-[1.64]`,
              sided && 'lg:text-start'
            )}
          >
            {translations?.description}
          </p>
        </div>
        <div className={clsxm(sided && 'lg:block')}>{buttonNode}</div>
      </div>

      <div
        className={clsxm(
          `relative w-full mt-4 lg:flex video-plyr h-[15rem] ss:min-h-[27rem] md:min-h-[29rem]`,
          sided ? 'lg:w-1/2' : 'lg:w-4/5'
        )}
      >
        <HasMediaPlayer media={media} media_url={media_url} />
      </div>

      <div className={clsxm(`block`, sided && 'lg:hidden')}>{buttonNode}</div>
    </div>
  );
}
