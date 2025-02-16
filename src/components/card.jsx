import React from 'react'
import Title from './title'
import Steps from './steps'
import Step1 from './form-steps/step1'
import Step2 from './form-steps/step2'
import Step3 from './form-steps/step3'

export default function Card ({step, setStep, downloading, setDownloading}) {

  return (
    <div className='relative lg:w-[700px] w-[335px] flex flex-col gap-[32px] lg:gap-[20px] h-[max-content] rounded-[40px] p-[24px] lg:p-[48px] bg-[#08252B] lg:bg-[#041E23] border-[solid] border-[1px] border-[#0E464F]'>
        <div className='flex flex-col gap-[12px] '>
            <div className='w-full items-center lg:flex-row flex items-center lg:justify-between h-auto'>
                <Title step={step}/>
                <Steps step={step}/>
            </div>
            <div className={`${downloading? "flex" : "hidden"} z-[50] justify-center items-center z-[20] lg:w-[calc(100%-96px)] w-[calc(100%-48px)] h-[max-content] absolute top-[-10px]`}>
              <div className={`p-[20px] w-[max-content] h-[max-content] bg-[white] shadow-md rounded-[10px] text-[#08252B] text-[1.2rem]`}>Please wait while your ticket downloads ...</div>
            </div>
            <div className='w-full h-[4px] bg-[#0E464F] rounded-[5px]'>
                <div className={`${step === 1? "w-[33.3%]": step === 2? "w-[66.6%]" : "w-[100%]"} transition-[1s]  h-full bg-[#24A0B5] rounded-[inherit]`}></div>
            </div>
        </div>
        <Step1 step={step} setStep={setStep}/>
        <Step2 step={step} setStep={setStep}/>
        <Step3 step={step} setStep={setStep} setDownloading={setDownloading}/>
    </div>
  )
}
