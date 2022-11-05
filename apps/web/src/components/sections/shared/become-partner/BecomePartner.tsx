import { useFormSubmit } from '@/app/hooks/useFormSubmit';
import Button from '@/components/ui/buttons/Button';
import { TextArea } from '@/components/ui/form-control/TextArea';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { Spinner } from '@/components/ui/Spinner';
import { useTranslation } from 'next-i18next';
import InputField from '@/components/ui/form-control/InputField';

export const BecomePartner = () => {
  const { t } = useTranslation();

  const { onSubmit, success, loading, errors } = useFormSubmit(
    '/api/partners/requests'
  );

  return (
    <form
      onSubmit={onSubmit}
      method='POST'
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
          {loading && <Spinner />}
          {t('PATERNER_FORM_SUBMIT')}
        </Button>
      </div>
    </form>
  );
};
