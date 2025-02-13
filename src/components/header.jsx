import React from 'react'
import Navlink from './navlink'
import { useState } from 'react'
import { items } from './utils/navItems'

export default function Header() {
    const [selectedNav, setSelectedNav] = useState(1)
    const [mouseOver, setMouseOver] = useState(false)

  return (
    <header className='w-[320px] md:w-full top-[20px] z-[1001] lg:w-[1200px] bg-[#041E23] flex py-[12px] px-[16px] py-[16px] items-center h-[76px] flex justify-between  border-[solid] border-[1px] border-[#197686] rounded-[12px] lg:rounded-[24px]'>
        <div className=' w-[max-content] flex items-center gap-[8px] flex h-[max-content]'>
            <div className=' bg-[#052F35] rounded-[12px] border-[1px] border-[#0E464F] w-[max-content] h-[max-content] py-[6px] px-[8px] '>
                <img src="/logo.svg" alt="logo" className='w-[24px] h-[24px]' />
            </div>
            <img src="/ticz.svg" alt="logo image" className='mt-[5px]' />
        </div>

        <nav className='hidden md:flex'>
            <ul className='flex items-center h-[max-content] list-style-none gap-[16px] text-18px text-white'>
                {
                    items.map(item => <Navlink key={item.id} id={item.id} name={item.name} selectedNav={selectedNav} setSelectedNav={setSelectedNav}/>)
                }
            </ul>
        </nav>

        <button onMouseOver={()=>{setMouseOver(true)}} onMouseOut={()=>{setMouseOver(false)}} className={`w-[max-content] font-[500] h-[max-content] border-[1px] hover:border-[##D9D9D9] transition-[.2s] font-jeju flex gap-[8px] lg:gap-[16px] items-center px-[16px] py-[12px] lg:px-[24px] lg:py-[16px] justify-center hover:bg-[#24A0B5] bg-[white] rounded-[12px] text-[14px] lg:text-[16px] hover:text-[#D9D9D9] text-[#0A0C11]`}>
            <p>MY TICKETS</p>
            <span className={`font-[600] transition-[.2s] transform ${mouseOver? "rotate-[-45deg]" : ""}`}>&rarr;</span>
        </button>
    </header>
  )
}
