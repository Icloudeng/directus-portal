import { ST_Countdown, STemplates_Props } from '@apps/contracts';
import { useTranslation } from 'next-i18next';
import Countdown, { CountdownRendererFn } from 'react-countdown';

import { useHasMounted } from '@/app/hooks/useHasMounted';

export function ST_CountdownsFC({ items }: STemplates_Props<ST_Countdown>) {
  return (
    <div className='flex flex-col items-center justify-center space-y-10'>
      {items.map((item, index) => (
        <STCountdown key={index} item={item} />
      ))}
    </div>
  );
}

function STCountdown({ item }: { item: ST_Countdown }) {
  const { t } = useTranslation();
  const { mounted } = useHasMounted();

  if (!mounted) return <></>;

  return <Countdown date={new Date(item.item.date)} renderer={renderer(t)} />;
}

const renderer: (t: any) => CountdownRendererFn = (t) => {
  return ({ days, hours, minutes, seconds }) => (
    <div className='flex items-start justify-center w-full gap-4 count-down-main'>
      <div className='timer w-16'>
        <div className='bg-primary-600 py-4 px-2 rounded-lg overflow-hidden'>
          <h3 className='countdown-element days font-Cormorant font-semibold text-2xl text-white text-center'>
            {days}
          </h3>
        </div>
        <p className='text-lg font-Cormorant font-medium text-gray-900 mt-1 text-center w-full'>
          {t('DAYS')}
        </p>
      </div>
      <h3 className='font-manrope font-semibold text-2xl text-gray-900 mt-4'>
        :
      </h3>
      <div className='timer w-16'>
        <div className='bg-primary-600 py-4 px-2 rounded-lg overflow-hidden'>
          <h3 className='countdown-element hours font-Cormorant font-semibold text-2xl text-white text-center'>
            {hours}
          </h3>
        </div>
        <p className='text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full'>
          {t('HOURS')}
        </p>
      </div>
      <h3 className='font-manrope font-semibold text-2xl text-gray-900 mt-4'>
        :
      </h3>
      <div className='timer w-16'>
        <div className='bg-primary-600 py-4 px-2 rounded-lg overflow-hidden'>
          <h3 className='countdown-element minutes font-Cormorant font-semibold text-2xl text-white text-center'>
            {minutes}
          </h3>
        </div>
        <p className='text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full'>
          {t('MINUTES')}
        </p>
      </div>
      <h3 className='font-manrope font-semibold text-2xl text-gray-900 mt-4'>
        :
      </h3>
      <div className='timer w-16'>
        <div className='bg-primary-600 py-4 px-2 rounded-lg overflow-hidden '>
          <h3 className='countdown-element seconds font-Cormorant font-semibold text-2xl text-white text-center animate-countinsecond'>
            {seconds}
          </h3>
        </div>
        <p className='text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full'>
          {t('SECONDS')}
        </p>
      </div>
    </div>
  );
};
