import React from 'react'

export default function Title({step}) {
  return (
    <div className='lg:text-[32px] text-[24px] w-auto font-jeju flex-1 text-[#FFFFFF]'>
        {
            step === 1? "Ticket Selection":
            step === 2? "Attendee Details":
            "Ready"
        }
    </div>
  )
}
