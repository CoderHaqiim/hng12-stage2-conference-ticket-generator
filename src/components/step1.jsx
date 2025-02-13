import React from 'react'
import { useState,useContext,useRef, useLayoutEffect } from 'react'
import { DetailsContext } from './globalStates/detailsContext'
import Ticket from './ticket'
import Button from './button'
import useProcesses from './hooks/useProcesses'
import { ticketTypes } from './utils/ticketTypes'
import useDetails from './hooks/useDetails'

export default function Step1({step, setStep}) {
        const {details, setDetails} = useContext(DetailsContext)

        const [selectedTicket, setSelectedTicket] = useState(0)
        const {nextProcess, previousProcess} = useProcesses(step, setStep)
        const selectRef = useRef(null)
        const {updateDetails} = useDetails()

        useLayoutEffect(()=>{
            setSelectedTicket(details?.ticketType ?? 0)
        },[details])

        const changeAction = () => {
            const tickets = selectRef.current.value
            updateDetails(tickets, 'numberOfTickets')
        }

        const style1 = { 
            background: "radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)"
        }
    
        const loopTickets = () => {
            const ticketPieces = 10
            const tickets = []
            let i = 1
            while(i < ticketPieces){
                tickets.push({id:i, value:i})
                i++
            }
           return  tickets.map(ticket =>  <option className='text-[#02191d] bg-[#FFFFFF10]' key={ticket.id} value={ticket.id}>{ticket.value}</option>)
        }

        const goToNext = () =>{
            if (details?.numberOfTickets && details?.ticketType) {
                nextProcess()
                return;
            } 
            setDetails((prev) => ({
                ...prev,
                ticketType: prev.ticketType ?? 0,
                numberOfTickets: prev.numberOfTickets ?? 1,
            }));

            nextProcess()
        }

    return (
            <div className={`${step === 1? "flex" : "hidden"} h-[max-content] rounded-[32px] w-full lg:border-[1px] lg:bg-[#08252B] lg:border-[#0E464F]  lg:p-[24px] flex-col gap-[32px]`}>
    
                <div className='border-[solid] border-t-0  w-full border-[2px] gap-[24px] lg:gap-[8px] flex flex-col border-[#07373F] px-[24px] py-[16px] lg:p-[24px} lg:h-[200px] h-[max-content] rounded-[24px] bg-[#0A0C1110]' style={style1}>
                    <div className='w-full h-[max-content] gap-[8px] flex flex-col text-[white] justify-center items-center'>
                        <p className='text-center font-roadrage leading-[100%] text-[42px] lg:text-[62px]'>Techember Fest "25</p>
                        <p className='text-center w-full lg:w-[340px] font-roboto text-[14px] lg:text-[16px] word-wrap'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                    </div>
                    <div className='flex lg:flex-row flex-col h-[max-content] gap-[4px] lg:gap-[16px] justify-center text-[16px] items-center text-[#FAFAFA]'> 
                        <p>📍 [Event Location]</p>
                        <p className='hidden lg:flex'>| |</p>
                        <p>March 15, 2025 | 7:00 PM</p>
                    </div>
                </div>
    
                <div className='w-full h-[4px] bg-[#07373F]'></div>
    
                <div className='h-[max-content] w-full flex flex-col gap-[8px]'>
                    <h2 className='text-[white]'>Select Ticket Type:</h2>
                    <div className='w-full h-[max-content]  p-[16px] jusitfy-center items-center rounded-[24px] bg-[#052228] gap-[16px] lg:flex-row flex flex-col border-[1px] border-[#07373F]'>
                        {
                            ticketTypes.map(ticket => <Ticket key={ticket.id} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} type={ticket.type} amount={ticket.amount} id={ticket.id}/>)
                        }
                    </div>
                </div>
    
                <div className='h-[max-content] w-full flex flex-col gap-[8px]'>
                    <h2 className='text-[white]'>Number of Tickets</h2>
                    <select ref={selectRef} value={details?.numberOfTickets} onChange={changeAction} name="number-tickets" id="number-tickets" className='w-full text-[white] border-[1px] border-[#07373F] h-[max-content] rounded-[12px] p-[12px] gap-[8px]'>
                        {
                            loopTickets()
                        }
                    </select>
                </div>
                <div className='h-[max-content] w-full gap-[24px] flex flex-col-reverse lg:flex-row '>
                    <Button clickAction={previousProcess} confirm={false} text="Cancel" type='zilch'/>
                    <Button clickAction={goToNext} confirm={true} text="Next" type='accent'/>
                </div> 
            </div>
  )
}
