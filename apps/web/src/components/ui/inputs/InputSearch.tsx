import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { InputWithIcon } from './InputWithIcon';

type Props = {
  onChange?: (value: string) => void;
  showIcon?: boolean;
  name?: string;
  withButton?: boolean;
  defaultValue?: string;
  required?: boolean;
};
export function InputSearch({
  onChange,
  showIcon = true,
  withButton = true,
  name,
  defaultValue = '',
  required,
}: Props) {
  const { t } = useTranslation();
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    onChange && onChange(value.trim());
  }, [value]);

  return (
    <InputWithIcon
      label={t('Search')}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      name={name}
      required={required}
      icon={
        showIcon && (
          <svg
            aria-hidden='true'
            className='absolute inset-0 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        )
      }
      btnText={t('Search')}
      withButton={withButton}
    />
  );
}
