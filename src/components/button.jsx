import React from 'react'

export default function Button({clickAction, text, type}) {

    function action(e){
        e.preventDefault()
        clickAction()
    }

  return (
    type === "accent"? 
    <button onClick={(e)=>{action(e)}} type='submit' className='btn py-[12px] rounded-[8px] h-[48px] text-[white] flex items-center justify-center hover:bg-[#2C545B] bg-[#24A0B5] px-[0px] w-full border-[#24A0B5] border-[1px]'>{text}</button>:
    <button onClick={(e)=>{action(e)}} className='btn py-[12px] rounded-[8px] px-[24px] w-full h-[48px] text-[#24A0B5] hover:bg-[#00000030] border-[#24A0B5] border-[1px]'>{text}</button>
  )
}
