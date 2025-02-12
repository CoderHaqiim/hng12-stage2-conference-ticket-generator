import React from 'react'
import { useContext } from 'react'
import { DetailsContext } from './globalStates/detailsContext'

export default function Button({clickAction, text, confirm, type}) {
  const {details} = useContext(DetailsContext)

    function checkDetails(){
      console.log(details)
    }

    function action(e){
        e.preventDefault()
        if(confirm){
          checkDetails()
        }
        clickAction()
    }

  return (
    type === "accent"? 
    <button onClick={(e)=>{action(e)}} type='submit' className='btn py-[12px] rounded-[8px] h-[48px] text-[white] bg-[#24A0B5] px-[24px] w-full border-[#24A0B5] border-[1px]'>{text}</button>:
    <button onClick={(e)=>{action(e)}} className='btn py-[12px] rounded-[8px] px-[24px] w-full h-[48px] text-[#24A0B5] border-[#24A0B5] border-[1px]'>{text}</button>
  )
}
