import { useTranslation } from 'next-i18next';
import { useId } from 'react';

import clsxm from '@/lib/clsxm';

import { useErrorInput } from '@/app/hooks/useErrorInput';

type ITextArea = {
  inputLabel: string;
  inputID: string;
  inputPlaceholder: string;
  errors?: { [x: string]: any };
  className?: string;
  required?: boolean;
};

export const TextArea = ({
  inputLabel,
  inputID,
  inputPlaceholder,
  errors,
  className,
  required,
}: ITextArea) => {
  const { error, onKeyUp } = useErrorInput(inputID, errors);
  const { t } = useTranslation();
  const id = useId();

  return (
    <div className={clsxm('w-full', className)}>
      <label
        htmlFor={inputID + id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        {inputLabel}
      </label>
      <textarea
        id={inputID + id}
        rows={4}
        onKeyUp={onKeyUp}
        name={inputID}
        required={required}
        className={`block p-2.5 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border ${
          error ? 'border-red-400' : 'border-gray-300'
        } focus:ring-primary-400 focus:border-primary-400`}
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
  );
};
