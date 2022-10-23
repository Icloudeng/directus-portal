import Button from '@/components/ui/buttons/Button'

import { ITabButtonData } from "@/types/tabVideoTypes";

type ITabButton = {
  btnText: string;
  handleBtnClick: (tabCardEl: ITabButtonData, index: number) => any
}

export const TabButton = ({ handleBtnClick, btnText }: ITabButton) => {
  return (
    <Button
      onClick={() => handleBtnClick}
      className='btn-tab-direction py-3 font-semibold rounded-md border-none bg-[#f5f7fa] text-dark hover:bg-primary-400'>
      {btnText}
    </Button>
  )
}
