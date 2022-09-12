import Button from '@/components/buttons/Button';
import { useTranslation } from 'next-i18next';

export const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-7 lg:flex-row items-center justify-center lg:gap-44 px-10 py-10'>
      <div className='flex flex-col items-center gap-4'>
        <p className='text-2xl font-bold'>{t('Join our mailing list')}</p>
        <p className='text-xs max-w-md text-center uppercase font-extralight'>
          Sign up to receive updates on new product announcements, Gift ideas,
          special promotions, sales and more
        </p>
      </div>
      <form className='flex items-center gap-5'>
        <input
          placeholder='Enter your email'
          className='border-none font-extralight bg-transparent ring-1 ring-primary-400 rounded-sm h-12 w-[20rem] px-2 font-base outline-none focus:ring-2'
        />
        <Button
          type='button'
          className='py-[.7rem] px-8 font-light bg-primary-400 rounded-sm hover:bg-primary-500'
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};
