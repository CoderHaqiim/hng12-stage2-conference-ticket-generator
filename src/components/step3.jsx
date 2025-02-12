import React from 'react'
import { useState } from 'react'
import Button from './button'
import useProcesses from './hooks/processes'

export default function Step3({step, setStep}) {
    const {nextProcess, previousProcess} = useProcesses(step, setStep)

    return (
            <div className={`${step === 3? "flex" : "hidden"} h-[max-content] rounded-[32px] w-full lg:border-[1px] lg:bg-[#08252B] lg:border-[#0E464F] items-center lg:p-[24px] flex-col gap-[32px]`}>

                <div className='w-[300px] h-[600px] flex p-[24px] justify-center relative'>
                    <div className='absolute w-full h-full top-0 left-0'>
                        <img src="/subtract.svg" alt="" />
                    </div>
                    <div className='w-[260px] z-[2] h-[446px] items-center flex flex-col gap-[20px] rounded-[16px] p-[14px] bg-[#031E1210] border-[1px] border-[#24A0B5]'>
                        <div className='w-[175px] text-grey  text-center h-[max-content] flex-col justify-center flex '>
                            <p className='font-roadrage text-[34px] w-full' >Techember Fest "25</p>
                            <p className='w-full font-roboto text-[10px]'>📍 04 Rumens road, Ikoyi, Lagos</p>
                            <p className='w-full font-roboto text-[10px] text-[]'>📅 March 15, 2025 | 7:00 PM</p>
                        </div>
                        <div className='w-[140px] h-[140px] rounded-[12px] border-[4px] border-[#24A0B550]'></div>
                        <div className='p-[4px] w-full h-[max-content] items-center justify-center bg-[#08343C] rounded-[8px] border-[1px] border-[#133D44]'>
                            <div className='w-full h-[max-content] border-b-[1px] border-[#12464E] gap-[8px] flex'>
                                <div className='w-[calc(50%-8px)] text-grey gap-[4px] border-r-[1px] border-[#12464E] p-[4px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Enter your name</p>
                                    <p className='text-[12px] font-bold font-roboto'>Avi Chukwu</p>
                                </div>
                                <div className='w-auto flex-1 text-grey gap-[4px] p-[4px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Enter your email*</p>
                                    <p className='text-[12px] font-bold font-roboto'>Avi Chukwu</p>
                                </div>
                            </div>
                            <div className='w-full h-[max-content] gap-[8px] pb-[0px] pt-[0px] flex'>
                                <div className='w-[calc(50%-8px)] text-grey gap-[4px] border-r-[1px] border-[#12464E] p-[4px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Ticket type:</p>
                                    <p className='text-[12px] font-bold font-roboto'>Avi Chukwu</p>
                                </div>
                                <div className='w-auto flex-1 text-grey gap-[4px] p-[4px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Ticket for:</p>
                                    <p className='text-[12px] font-bold font-roboto'>Avi Chukwu</p>
                                </div>
                            </div>
                            <div className='w-full h-[max-content] border-t-[1px] border-[#12464E] gap-[8px] p-[8px]'>
                                <p className='text-[10px] font-roboto opacity-[33%] text-[white]'> Special request?</p>
                                <p className='text-[10px] font-roboto text-[white] '>Nil ? Or the users sad story they write in there gets this whole space, Max of three rows</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[max-content] w-full gap-[24px] flex flex-col-reverse lg:flex-row '>
                    <Button clickAction={previousProcess} text= "Book Another Ticket" type='zilch'/>
                    <Button clickAction={nextProcess} confirm={false} text="Download Ticket" type='accent'/>
                </div> 
            </div>
  )
}