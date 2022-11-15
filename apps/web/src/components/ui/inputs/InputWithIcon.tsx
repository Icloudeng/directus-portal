import Button from '@/components/ui/buttons/Button';
import { ChangeEventHandler, InputHTMLAttributes } from 'react';

type IInputWithIcon = {
  label: string;
  icon: JSX.IntrinsicElements | any;
  withButton?: boolean;
  btnText: string;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const InputWithIcon = ({
  label,
  icon,
  withButton = false,
  btnText,
  value,
  onChange,
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
            {/* <svg aria-hidden="true" className="absolute inset-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
          </div>
        </div>
        <input
          type='search'
          id='search'
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-primary-400 focus:border-primary-400'
          placeholder={label}
          required
          value={value}
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
