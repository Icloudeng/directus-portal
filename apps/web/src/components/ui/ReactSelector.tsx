import { MDWithAsset } from '@/types/directus';
import React, { useState } from 'react';
import Select from 'react-select';
import { HasSvgText } from './HasSvgText';

type Params = Parameters<Select>;

type Props = {
  onChange?: (value: any) => void;
  initialValue?: any;
} & Pick<Params[0], 'isMulti' | 'isSearchable' | 'options'>;

export function HasSvgOrImage({
  icon,
  icon_svg,
}: {
  icon_svg?: string;
  icon?: MDWithAsset;
}) {
  return (
    <HasSvgText
      className='inline-flex mr-2 w-4 h-4'
      fallback={<>{icon && <img src={icon.src} className='w-full h-full' />}</>}
      svgText={icon_svg}
    />
  );
}

export const ReactSelector = ({ onChange, initialValue, ...props }: Props) => {
  const [selectedOption, setSelectedOption] = useState<any>(
    initialValue || null
  );
  const id = React.useId();

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    onChange && onChange(selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: 'w-full',
      minHeight: '2.9rem',
      borderRadius: '2px',
      border: state.isFocused && '1px solid var(--color-primary-400)',
      ':hover': {
        border: '1px solid var(--color-primary-500)',
      },
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected && 'var(--color-primary-400)',
      cursor: 'pointer',
    }),
  };

  return (
    <div className='custom-select w-full'>
      <Select
        isSearchable={false}
        value={selectedOption}
        instanceId={id}
        onChange={handleChange}
        styles={customStyles}
        {...props}
      />
    </div>
  );
};
