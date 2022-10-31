import { useFetch } from '@/app/hooks/useFetch';
import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { useTranslation } from 'next-i18next';
import { FormEvent, useState } from 'react';
import InputField from './components/InputField';
import { TextArea } from './components/TextArea';

export const BecomePartner = () => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const { callFetch, loading } = useFetch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const form = new FormData(target);
    const data = Object.fromEntries(form.entries());
    setErrors({});

    callFetch('/api/partners/requests', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(async (res) => ({ res, json: await res.json() }))
      .then(({ res, json }) => {
        if (!res.ok && res.status === 400) {
          setErrors(json);
        } else if (res.ok) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 1000 * 60);
          form.forEach((_, key) => {
            (target.querySelector(`[name=${key}]`) as HTMLInputElement).value =
              '';
          });
        }
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className='max-w-3xl w-full flex flex-col gap-7 justify-center items-center mx-auto'
    >
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap gap-7'>
        <InputField
          inputType='text'
          errors={errors}
          inputLabel={t('First Name')}
          inputPlaceholder={t('First Name')}
          inputID='first_name'
        />
        <InputField
          inputType='text'
          errors={errors}
          inputLabel={t('Last Name')}
          inputPlaceholder={t('Last Name')}
          inputID='last_name'
        />
      </div>
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap gap-7'>
        <InputField
          inputType='text'
          errors={errors}
          inputLabel={t('Job Title')}
          inputPlaceholder={t('Job Title')}
          inputID='job_title'
        />
        <InputField
          inputType='email'
          errors={errors}
          inputLabel='email'
          inputPlaceholder='email@domain.com'
          inputID='email'
        />
      </div>
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap gap-7'>
        <InputField
          inputType='phone'
          errors={errors}
          inputLabel={t('Phone Number')}
          inputPlaceholder='+1 444-444-4444'
          inputID='phone_number'
        />
        <InputField
          inputType='url'
          errors={errors}
          inputLabel={t('Website')}
          inputPlaceholder='www.company.com'
          inputID='website'
        />
      </div>
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap gap-7'>
        <InputField
          inputType='text'
          errors={errors}
          inputLabel={t('Company')}
          inputPlaceholder={t('Company')}
          inputID='company'
        />
        <InputField
          inputType='text'
          errors={errors}
          inputLabel={t('Country')}
          inputPlaceholder={t('Country')}
          inputID='country'
        />
      </div>
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap gap-7'>
        <TextArea
          errors={errors}
          inputLabel={t('Describe your needs')}
          inputPlaceholder={t("Let's know your needs")}
          inputID='description'
        />
      </div>
      {success && (
        <div className='w-4/5 my-3 bg-green-300 p-4 rounded-md text-white'>
          {t('PARTER_REQUEST_SENT')}
        </div>
      )}
      <div className='w-4/5 flex flex-wrap sm:flex-nowrap items-center justify-between sm:mt-7 gap-3'>
        <span className='text-xs text-center sm:text-start'>
          {t('By clicking Submit, you agree to our')}{' '}
          <UnstyledLink href='#' className='text-primary-600'>
            {t('Terms of Service')}
          </UnstyledLink>{' '}
          {t('and give your permission to create an account')}.
        </span>
        <Button
          type='submit'
          disabled={loading}
          className='w-full sm:w-auto flex items-center justify-center text-sm rounded-sm bg-primary-400 border-none px-7 py-3'
        >
          {loading && <Loading />}
          {t('PATERNER_FORM_SUBMIT')}
        </Button>
      </div>
    </form>
  );
};

function Loading() {
  return (
    <svg
      aria-hidden='true'
      className='mr-2 w-4 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
  );
}
