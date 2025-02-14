import React from 'react'

export default function Navlink({name, setSelectedNav,id, selectedNav}) {
  return (
    <li className={`${id === selectedNav? "text-[#FFFFFF]" : "text-[#B3B3B3]"} hover:text-[#FFFFFF] flex items-center font-jeju justify-center w-[max-content] h-[max-content] gap-[10px]`}>
        <button role="button" onClick={()=>{setSelectedNav(id)}} className='px-[10px] text-[18px] w-[max-content] h-full'>{name}</button>
    </li>
  )
}
