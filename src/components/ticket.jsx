import React from 'react'
import useDetails from './hooks/useDetails'

export default function Ticket({type, amount, id, setSelectedTicket, selectedTicket}) {
  const {updateDetails} = useDetails()

  const clickAction = () =>{
    setSelectedTicket(id)
    updateDetails(id, 'ticketType')
  }

  return (
    <button onClick={clickAction} className={` ${id === selectedTicket? "bg-[#12464E] border-[#197686] border-[1px]" : "bg-none border-[#197686]"} hover:bg-[#2C545B] font-roboto w-full lg:w-[158px] border-[2px] border-[#197686] rounded-[12px] gap-[12px] h-[110px] gap-[8px] p-[8px] flex-col flex`}>
        <div className='w-[80px] rounded-[8px] text-[20px] font-[500] text-[white] flex items-center justify-start h-[38px] text-left'>{amount}</div>
        <div className='flex flex-1 w-[max-content] items-start  text-[16px] text-[#FAFAFA] flex-col gap-[4px]'>
            <p className='flex-1 text-left font-[300] text-[16px] width-[auto]'>{type}</p>
            <p className='text-left font-[300] text-[14px]'>20/52</p>
        </div>
    </button>
  )
}
