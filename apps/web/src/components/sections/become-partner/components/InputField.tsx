import { useErrorInput } from '@/app/hooks/useErrorInput';
import { useTranslation } from 'next-i18next';
import { HTMLInputTypeAttribute } from 'react';

type InputField = {
  inputLabel: string;
  inputID: string;
  inputType: HTMLInputTypeAttribute;
  inputPlaceholder: string;
  errors?: { [x: string]: any };
};

function InputField({
  inputLabel,
  inputID,
  inputType,
  inputPlaceholder,
  errors,
}: InputField) {
  const { error, onKeyUp } = useErrorInput(inputID, errors);
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <label
        htmlFor={inputID + '-id'}
        className='block text-sm font-medium text-gray-700 capitalize'
      >
        {inputLabel}
      </label>
      <div className='mt-1 rounded-sm shadow-sm w-full'>
        <input
          type={inputType}
          name={inputID}
          id={inputID + '-id'}
          onKeyUp={onKeyUp}
          className={`block w-full rounded-sm bg-gray-50 py-3 ${
            error ? 'border-red-400' : 'border-gray-300'
          }  px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm`}
          placeholder={inputPlaceholder}
        />
        <span
          className={`text-red-400 text-sm ${
            error ? 'opacity-100' : 'opacity-0'
          } font-light`}
        >
          {error ? t(error) : '0'}
        </span>
      </div>
    </div>
  );
}

export default InputField;
