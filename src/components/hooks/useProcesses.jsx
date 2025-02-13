import React from 'react'

export default function useProcesses(step, setStep) {

    const nextProcess = () =>{
        if(step < 3){
            setStep(prev => prev + 1)
        }else{
            setStep(3)
        }
    }

    const previousProcess = () => {
        if(step > 1 && !3){
            setStep(prev => prev - 1)
        }
        else{
            setStep(1)
        }
    }

  return {nextProcess, previousProcess}
}
