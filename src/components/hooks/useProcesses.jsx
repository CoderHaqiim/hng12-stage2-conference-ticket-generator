import React from 'react'

export default function useProcesses(step, setStep) {

    const nextProcess = () =>{
        if(step < 3){
            setStep(prev => prev + 1)
        }else{
            setStep(3)
            alert('Ticket downloaded sucessfully. 😒🤥 You can book another Ticket')
        }
    }

    const previousProcess = () => {
        if(step > 1 && !3){
            setStep(prev => prev - 1)
        }
        else{
            localStorage.clear()
            setStep(1)
        }
    }

  return {nextProcess, previousProcess}
}
