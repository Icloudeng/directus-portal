import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type IDynamicInput = {
  withRange?: boolean;
  initValue: number;
  inputHeight?: string;
  textCenter?: boolean;
  textSize?: string;
  fontWeight?: string;
  unit: string;
  stepValue?: number;
  minValue: number;
  maxValue: number;
  onChange?: (value: number) => any;
};

export const DynamicInput = ({
  withRange = false,
  initValue,
  unit = '',
  stepValue = 1,
  minValue,
  maxValue,
  inputHeight = 'h-[2.8rem]',
  textCenter = true,
  textSize = 'text-sm',
  fontWeight = '',
  onChange,
}: IDynamicInput) => {
  const [inputVal, setInputVal] = useState(initValue);

  useEffect(() => {
    setInputVal(minValue);
  }, [minValue + minValue + stepValue]);

  useEffect(() => {
    onChange && onChange(inputVal);
  }, [inputVal]);

  return (
    <div
      className={`dynamicInput relative w-full flex items-center ${inputHeight} border`}
    >
      <button
        onClick={() => {
          setInputVal((value) => {
            const v = value - stepValue;
            return v >= minValue ? v : minValue;
          });
        }}
        className='w-7 h-7 text-gray-400 hover:bg-primary-100 flex items-center justify-center text-center rounded-sm m-1 cursor-pointer'
      >
        <AiOutlineMinus />
      </button>
      <input
        className={`flex-1 h-full w-full ${textSize} ${
          textCenter && 'text-center'
        } ${fontWeight} border-none outline-none focus:outline-none`}
        onChange={() => null}
        value={`${inputVal} ${unit}`}
        type='text'
      />
      {withRange && (
        <input
          className='pricing-input-range absolute inset-x-0 bottom-2 -z-0'
          type='range'
          onChange={(e) => setInputVal(+e.target.value)}
          value={inputVal}
          min={minValue}
          max={maxValue}
          step={stepValue}
        />
      )}
      <button
        aria-disabled
        onClick={() => {
          setInputVal((value) => {
            const v = value + stepValue;
            return v <= maxValue ? v : maxValue;
          });
        }}
        className='w-7 h-7 hover:bg-primary-100 flex items-center justify-center text-center rounded-sm m-1 cursor-pointer'
      >
        <span className='text-gray-400'>
          <AiOutlinePlus />
        </span>
      </button>
    </div>
  );
};
