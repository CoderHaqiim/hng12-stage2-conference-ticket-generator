import React, {useContext} from 'react'
import { DetailsContext } from '../globalStates/detailsContext'

export default function useProcesses(step, setStep) {
    const {setDetails} = useContext(DetailsContext)

    const nextProcess = () =>{
        if(step < 3){
            setStep(prev => prev + 1)
        }else{
            setStep(3)
            // alert('Ticket downloaded sucessfully. 😒🤥 You can book another Ticket')
        }
    }

    const previousProcess = () => {
        if(step > 1 && step !== 3){
            setStep(prev => prev - 1)
        }
        else{
            // localStorage.clear()
            // setDetails({})
            setStep(1)
            // window.location.href="/"
        }
    }

  return {nextProcess, previousProcess}
}
