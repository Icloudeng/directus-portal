import Button from '@/components/ui/buttons/Button';
import { ChangeEventHandler, InputHTMLAttributes } from 'react';

type IInputWithIcon = {
  label: string;
  icon: JSX.IntrinsicElements | any;
  withButton?: boolean;
  btnText: string;
  name?: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const InputWithIcon = ({
  label,
  icon,
  withButton = false,
  btnText,
  value,
  name,
  onChange,
  required,
}: IInputWithIcon) => {
  return (
    <div>
      <label
        htmlFor='search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only'
      >
        {label}
      </label>
      <div className='relative'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <div className='relative w-5 h-5 flex items-center justify-center'>
            {icon}
          </div>
        </div>
        <input
          type='search'
          id='search'
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary-400 focus:border-primary-400'
          placeholder={label}
          required={required}
          value={value}
          name={name}
          onChange={onChange}
        />
        {withButton ? (
          <Button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-primary-400 border-none hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-normal hover:font-medium rounded-md text-sm px-4 py-2'
          >
            {btnText}
          </Button>
        ) : null}
      </div>
    </div>
  );
};
