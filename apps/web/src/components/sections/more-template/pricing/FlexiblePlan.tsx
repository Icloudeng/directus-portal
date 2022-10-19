import Button from "@/components/ui/buttons/Button"

import { DynamicInput } from './DynamicInput';
import { ReactSelector } from './ReactSelector';


export const FlexiblePlan = () => {
    return (
        <div className='section__bock border space-y-5 shadow-sm drop-shadow-sm rounded-sm p-10'>
            <h4>Flexible plan</h4>
            <div className='block-calculator h-full'>
                <div className="calculator_wrapper h-full flex items-stretch">
                    <div className="calculator__left h-full flex-[1.5] flex flex-col gap-7 mr-3 pr-2">
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">Template</label>
                            <ReactSelector />
                        </div>
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">Location</label>
                            <ReactSelector />
                        </div>
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">RAM</label>
                            <div className="custom-select w-full">
                                <DynamicInput initValue={1} unit='GB' textCenter={false} textSize='text-normal' withRange stepValue={1} minValue={1} maxValue={12} />
                            </div>
                        </div>
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">CPU</label>
                            <div className="custom-select w-full">
                                <DynamicInput initValue={1} unit='Core' textCenter={false} textSize='text-normal' withRange stepValue={2} minValue={1} maxValue={13} />
                            </div>
                        </div>
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">Bandwidth</label>
                            <div className="custom-select w-full">
                                <DynamicInput initValue={1} unit='Mbps' textCenter={false} textSize='text-normal' minValue={1} maxValue={12} />
                            </div>
                        </div>
                        <div className="calculator__form-field flex items-center">
                            <label className="text-sm min-w-[10rem]" htmlFor="">SSD</label>
                            <div className="custom-select w-full">
                                <DynamicInput initValue={25} unit='GB' textCenter={false} textSize='text-normal' minValue={25} stepValue={25} maxValue={1000} />
                            </div>
                        </div>
                    </div>
                    <div className="calculator__right flex-1 flex flex-col items-center justify-between">
                        <div className="calc-price flex flex-col gap-3">
                            <h2>$ 10.1 <span className="text-sm font-normal">/mo</span></h2>
                            <span className="price-hr">$ 0.012/hr</span>
                        </div>
                        <div className="mt-auto">
                            <Button className="rounded-sm text-sm font-normal px-10 flex items-center justify-center" variant="outline">Deploy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
