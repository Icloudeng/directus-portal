import { useState } from 'react';
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
    maxValue:number
}

export const DynamicInput = ({
    withRange=false, 
    initValue, unit='', 
    stepValue=1,
    minValue,
    maxValue, 
    inputHeight='h-[2.8rem]', 
    textCenter=true, textSize='text-sm', 
    fontWeight=''
}:IDynamicInput) => {
    const [inputVal, setInputVal] = useState(initValue)
    
    return (
        <div className={`dynamicInput relative w-full flex items-center ${inputHeight} border`}>
            <span onClick={() => {inputVal > minValue &&setInputVal(inputVal - stepValue)}} className='w-7 h-7 hover:bg-primary-100 flex items-center justify-center text-center rounded-sm m-1 cursor-pointer'>
                <AiOutlineMinus className='text-gray-400' />
            </span>
            <input className={`flex-1 h-full w-full ${textSize} ${textCenter && 'text-center'} ${fontWeight} border-none outline-none focus:outline-none`} onChange={() => null} value={`${inputVal} ${unit}`} type="text" name="" id="" />
            {
                withRange && 
                <input className='pricing-input-range absolute inset-x-0 bottom-2 -z-0' type="range" onChange={() => null} value={inputVal} min={minValue} max={maxValue} step={stepValue} name="" id="" />
            }
            <span aria-disabled onClick={() => {inputVal < maxValue && setInputVal(inputVal + stepValue)}} className='w-7 h-7 hover:bg-primary-100 flex items-center justify-center text-center rounded-sm m-1 cursor-pointer'>
                <AiOutlinePlus className='text-gray-400' />
            </span>
        </div>
    )
}
