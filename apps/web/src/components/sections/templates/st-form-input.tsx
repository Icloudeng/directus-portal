import { useFormSubmit } from '@/app/hooks/useFormSubmit';
import { useSharedData } from '@/app/store';
import { mut, useMut } from '@/cms/mut';
import { Spinner } from '@/components/ui/Spinner';
import Button from '@/components/ui/buttons/Button';
import InputField from '@/components/ui/form-control/InputField';
import { TextArea } from '@/components/ui/form-control/TextArea';
import { ST_FormInput, STemplates_Props } from '@apps/contracts';
import { useTranslation } from 'next-i18next';

export function ST_FormInputFC({ items }: STemplates_Props<ST_FormInput>) {
  const { t } = useTranslation();
  const { locale } = useSharedData();
  const { onSubmit, success, metadata, loading, errors } =
    useFormSubmit('/api/forms');

  const hasSameGroup = items.find(
    ({ item }, index, data) =>
      data[index - 1] && data[index - 1].item.group != item.group
  );

  if (hasSameGroup) {
    return (
      <div className='flex justify-center'>
        <h3 className='text-2xl text-red-400 text-center'>
          {'All form inputs must have the same group name'}
        </h3>
      </div>
    );
  }

  const submitButton = items.find(({ item }) => item.type === 'submit');
  const inputs = items.filter(({ item }) => item.type !== 'submit');

  const submitButtonTranslation = useMut(submitButton?.item);

  return (
    <form
      onSubmit={onSubmit}
      method='POST'
      className='max-w-3xl w-full flex flex-row gap-4 flex-wrap justify-between items-center mx-auto'
    >
      {inputs.map((input) => {
        const inputItem = mut(input.item, locale);

        metadata.current[inputItem.name] = inputItem;

        if (inputItem.type === 'textarea') {
          return (
            <TextArea
              key={inputItem.id}
              errors={errors}
              inputID={inputItem.name}
              inputLabel={inputItem.translations?.label || inputItem.name}
              inputPlaceholder={inputItem.translations?.placeholder || ''}
              className={inputItem.full_width ? 'w-full' : 'w-[48%]'}
            />
          );
        }

        return (
          <InputField
            key={inputItem.id}
            inputType={inputItem.type}
            errors={errors}
            inputID={inputItem.name}
            inputLabel={inputItem.translations?.label || inputItem.name}
            inputPlaceholder={inputItem.translations?.placeholder || ''}
            className={inputItem.full_width ? 'w-full' : 'w-[48%]'}
          />
        );
      })}

      {success && (
        <div className='w-full'>
          <div className='w-4/5 my-3 bg-green-400 p-4 rounded-md text-white opacity-95'>
            {t('FORM_SUBMITTED')}
          </div>
        </div>
      )}

      {submitButtonTranslation && (
        <div className='w-full flex'>
          <Button
            type='submit'
            disabled={loading}
            className='w-full sm:w-auto flex items-center justify-center text-sm rounded-sm bg-primary-400 border-none px-7 py-3'
          >
            {loading && <Spinner />}
            {submitButtonTranslation.translations?.label ||
              t('PATERNER_FORM_SUBMIT')}
          </Button>
        </div>
      )}
    </form>
  );
}
