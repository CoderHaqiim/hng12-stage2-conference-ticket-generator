import React from 'react'
import Navlink from './navlink'
import { useState } from 'react'

const items = [
    {id:1, name:"Events"},
    {id:2, name:"My Tickets"},
    {id:3, name:"About Project"}
]

export default function Header() {
    const [selectedNav, setSelectedNav] = useState(1)
  return (
    <header className='w-[320px] md:w-full sticky top-[5px] z-[1001] lg:w-[1200px] flex py-[12px] px-[16px] py-[16px] items-center h-[76px] flex justify-between bg-[#05252c40] border-[solid] border-[1px] border-[#197686] rounded-[12px] lg:rounded-[24px]'>
        <div className=' w-[max-content] flex items-center gap-[8px] flex h-[max-content]'>
            <div className=' bg-[#052F35] rounded-[12px] border-[1px] border-[#0E464F] w-[max-content] h-[max-content] p-[8px] '>
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

        <button className='w-[max-content] font-[500] h-[max-content] font-jeju flex gap-[8px] lg:gap-[16px] items-center px-[16px] py-[12px] lg:px-[24px] lg:py-[16px] justify-center bg-[white] rounded-[12px] text-[14px] lg:text-[16px] text-[#0A0C11]'>
            <p>MY TICKETS</p>
            <span className='font-[600]'>&rarr;</span>
        </button>
    </header>
  )
}
