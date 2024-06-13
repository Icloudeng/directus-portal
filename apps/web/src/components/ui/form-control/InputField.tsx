import { useTranslation } from 'next-i18next';
import { HTMLInputTypeAttribute, useId } from 'react';

import clsxm from '@/lib/clsxm';

import { useErrorInput } from '@/app/hooks/useErrorInput';

type InputField = {
  inputLabel: string;
  inputID: string;
  inputType: HTMLInputTypeAttribute;
  inputPlaceholder: string;
  errors?: { [x: string]: any };
  border?: boolean;
  className?: string;
  required?: boolean;
  pattern?: string;
  defaultValue?: string;
};

function InputField({
  inputLabel,
  inputID,
  inputType,
  inputPlaceholder,
  errors,
  border = true,
  className,
  required,
  pattern,
  defaultValue,
}: InputField) {
  const { error, onKeyUp } = useErrorInput(inputID, errors);
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={clsxm('w-full', className)}>
      <label
        htmlFor={inputID + id}
        className='block text-sm font-medium text-gray-700 capitalize'
      >
        {inputLabel}
      </label>

      <div className={`mt-1 rounded-sm ${border ? 'shadow-sm' : ''} w-full`}>
        <input
          type={inputType}
          name={inputID}
          id={inputID + id}
          onKeyUp={onKeyUp}
          required={required}
          pattern={pattern}
          defaultValue={defaultValue}
          className={clsxm(
            `block w-full rounded-sm bg-gray-50 py-3 px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm`,
            error ? 'border-red-400' : 'border-gray-300'
          )}
          placeholder={inputPlaceholder}
        />
        <span
          className={clsxm(
            `text-red-400 text-sm font-light inline-block`,
            error ? 'opacity-100' : 'opacity-0 hidden'
          )}
        >
          {error ? t(error) : '0'}
        </span>
      </div>
    </div>
  );
}

export default InputField;
