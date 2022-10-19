import { MouseEventHandler } from 'react'

import Button from '@/components/ui/buttons/Button'

type ITabButton = {
    btnText: string
    handleClick: MouseEventHandler<HTMLButtonElement> | undefined | any
}

export const TabButton = ({ btnText, handleClick }:ITabButton) => {
  return (
    <Button onClick={handleClick} className='btn-tab-direction bg-[#f5f7fa] py-3 rounded-md border-none text-dark font-bold'>{btnText}</Button>
  )
}
