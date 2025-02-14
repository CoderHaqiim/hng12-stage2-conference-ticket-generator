import React from 'react'
import Title from './title'
import Steps from './steps'
import Step1 from './form-steps/step1'
import Step2 from './form-steps/step2'
import Step3 from './form-steps/step3'

export default function Card ({step, setStep}) {

  return (
    <div className='lg:w-[700px] w-[335px] flex flex-col gap-[32px] lg:gap-[20px] h-[max-content] rounded-[40px] p-[24px] lg:p-[48px] bg-[#08252B] lg:bg-[#041E23] border-[solid] border-[1px] border-[#0E464F]'>
        <div className='flex flex-col gap-[12px] '>
            <div className='w-full items-center lg:flex-row flex items-center lg:justify-between h-auto'>
                <Title step={step}/>
                <Steps step={step}/>
            </div>
            <div className='w-full h-[4px] bg-[#0E464F] rounded-[5px]'>
                <div className={`${step === 1? "w-[33.3%]": step === 2? "w-[66.6%]" : "w-[100%]"} h-full bg-[#24A0B5] rounded-[inherit]`}></div>
            </div>
        </div>
        <Step1 step={step} setStep={setStep}/>
        <Step2 step={step} setStep={setStep}/>
        <Step3 step={step} setStep={setStep}/>
    </div>
  )
}
