import React from 'react'
import { useState, useContext, useRef } from 'react'
import Button from '../button'
import useProcesses from '../hooks/useProcesses'
import { ProfilePictureContext } from '../globalStates/profilePictureContext'
import { DetailsContext } from '../globalStates/detailsContext'
import { ticketTypes } from '../utils/ticketTypes'
import useDownloadTickets from '../hooks/downloadTickets'

export default function Step3({step, setStep, setDownloading}) {
    const {previousProcess} = useProcesses(step, setStep)
    const {profilePicture} = useContext(ProfilePictureContext)
    const {details} = useContext(DetailsContext)
    const ticketRef = useRef(null)
    const {downloadTicket} = useDownloadTickets() 

    const shortenWord = (word, length) => {
        const shortWord = word.slice(0,length) + '...'

        return word.length > length ? shortWord : word
    }

    const download = () => {
        setDownloading(true)
        downloadTicket(ticketRef, details?.name, setDownloading)
    }

    return (
            <div className={`${step === 3? "flex" : "hidden"} form h-[max-content] rounded-[32px] w-full lg:bg-[#08252B] items-center lg:p-[24px] flex-col gap-[32px]`}>
                <div className='w-full flex flex-col gap-[12px]  h-[max-content] text-center'>
                    <h1 className='text-[white] font-alatsi text-[24px] lg:text-[32px] '>Your Ticket is Booked!</h1>
                    <p className='lg:flex hidden text-center justify-center leading-[150%] font-roboto text-grey text-center text-[16px]'>Check your email for a copy or you can 
                        <span className='font-bold'>&nbsp; download</span>
                    </p>
                    <p className='lg:hidden flex leading-[150%] flex text-center w-full font-roboto text-grey text-[16px]'>
                        You can download or Check your email for a copy
                    </p>

                </div>

                <div ref={ticketRef} className='w-[300px] h-[600px] flex flex-col items-center p-[24px] justify-center relative'>
                    <div className='absolute w-full h-full top-0 left-0'>
                        <img src="/subtract.svg" alt="" />
                    </div>

                    <div className='w-[260px] z-[2] h-[446px] items-center justify-center flex flex-col gap-[20px] rounded-[16px] p-[14px] bg-[#031E1210] border-[1px] border-[#24A0B5]'>
                        <div className='w-[175px] text-grey  text-center h-[max-content] flex-col justify-center flex '>
                            <p className='font-roadrage leading-[100%] text-[34px] w-full' >Techember Fest "25</p>
                            <p className='w-full font-roboto text-[10px]'>📍 04 Rumens road, Ikoyi, Lagos</p>
                            <p className='w-full font-roboto text-[10px] text-[]'>📅 March 15, 2025 | 7:00 PM</p>
                        </div>
                        <div className='w-[140px] h-[140px] rounded-[12px] border-[4px] border-[#24A0B550]'>
                            <img src={details?.profilePicture || '/user.png'} className="w-full h-full rounded-[inherit] " alt="your-profile-picture" />
                        </div>

                        <div className='p-[4px] w-full h-[max-content] items-center justify-center bg-[#08343C] rounded-[8px] border-[1px] border-[#133D44]'>
                            <div className='w-full h-[max-content] border-b-[1px] border-[#12464E] gap-[8px] flex'>
                                <div className='w-[calc(50%-8px)] text-grey gap-[4px] border-r-[1px] border-[#12464E] py-[4px] p-[3px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] w-full font-roboto text-left opacity-[33%]'>Enter your name</p>
                                    <p className='text-[10px] w-full word-wrap whitespace-wrap font-bold font-roboto'>{details?.name && shortenWord(details.name, 20)}</p>
                                </div>
                                <div className='w-1/2 flex-1 text-grey gap-[4px] py-[4px] p-[3px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Enter your email*</p>
                                    <p className='text-[10px] w-full max-w-[20px] word-wrap whitespace-wrap font-bold font-roboto'>{details?.email && shortenWord(details.email, 20)}</p>
                                </div>
                            </div>
                            <div className='w-full h-[max-content] gap-[8px] pb-[0px] pt-[0px] flex'>
                                <div className='w-[calc(50%-8px)] text-grey gap-[4px] border-r-[1px] border-[#12464E] py-[4px]  p-[3px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Ticket type:</p>
                                    <p className='text-[10px] font-bold font-roboto'>{ticketTypes[details?.ticketType]?.type}</p>
                                </div>
                                <div className='w-auto flex-1 text-grey gap-[4px] py-[4px] p-[3px] flex flex-col h-[max-content]'>
                                    <p className='text-[10px] font-roboto text-left opacity-[33%]'>Ticket for:</p>
                                    <p className='text-[10px] word-wrap whitespace-wrap font-bold font-roboto'>{details?.numberOfTickets}</p>
                                </div>
                            </div>
                            <div className='w-full h-[max-content] border-t-[1px] border-[#12464E] gap-[8px] p-[8px]'>
                                <p className='text-[10px] font-roboto opacity-[33%] text-[white]'> Special request?</p>
                                <p className='text-[10px] flex-wrap w-full font-roboto break-words text-[white] '>{details?.request && shortenWord(details.request, 100)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[48px] w-[236px] z-[2] flex items-center justify-center h-[68px]'>
                        <img src="/bar-code.svg" className='w-full h-full' alt="" />
                    </div>
                </div>

                <div className='h-[max-content] w-full gap-[24px] flex flex-col-reverse lg:flex-row '>
                    <Button clickAction={previousProcess} text= "Book Another Ticket" type='zilch'/>
                    <Button clickAction={download} confirm={false} text="Download Ticket" type='accent'/>
                </div> 
            </div>
  )
}