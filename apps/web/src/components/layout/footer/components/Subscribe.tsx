import { useTranslation } from 'next-i18next';

import Button from '@/components/ui/buttons/Button';

export const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-7 lg:flex-row items-center justify-center lg:gap-44 px-10 py-10'>
      <div className='flex flex-col items-center gap-4'>
        <p className='text-2xl font-bold text-center'>
          {t('Join our mailing list')}
        </p>
        <p className='text-xs max-w-md text-center uppercase font-extralight'>
          {t('JOIN_MAIL_TEXT')}
        </p>
      </div>
      <form className='flex flex-col ss:flex-row items-center gap-5'>
        <input
          placeholder={t('Enter your email')}
          className='border-none font-extralight bg-transparent ring-1 ring-primary-400 rounded-sm h-12 max-w-[20rem] w-full px-2 font-base outline-none focus:ring-2'
        />
        <Button
          type='button'
          className='w-full ss:w-min flex items-center justify-center py-[.7rem] px-8 font-light bg-primary-400 rounded-sm hover:bg-primary-500'
        >
          {t('Subscribe')}
        </Button>
      </form>
    </div>
  );
};
