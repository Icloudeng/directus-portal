import { useEffect, useState } from 'react';
import { InputWithIcon } from './InputWithIcon';

export function InputSearch({
  onChange,
}: {
  onChange?: (value: string) => void;
}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    onChange && onChange(value.trim());
  }, [value]);

  return (
    <InputWithIcon
      label='Search'
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      icon={
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
      }
      btnText='search'
      withButton
    />
  );
}
