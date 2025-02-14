import React from 'react'
import { useState, useRef, useContext} from 'react'
import Button from '../button'
import useProcesses from '../hooks/useProcesses'
import { ProfilePictureContext } from '../globalStates/profilePictureContext'
import { ErrorContext } from '../globalStates/errorContext'
import useDetails from '../hooks/useDetails'
import useHttpRequest from '../hooks/useHttpRequest'
import { DetailsContext } from '../globalStates/detailsContext'

export default function Step2({step, setStep}) {

    const {nextProcess, previousProcess} = useProcesses(step, setStep)
    const {details} = useContext(DetailsContext)
    const {errors, setErrors} = useContext(ErrorContext)
    const pictureRef = useRef(null)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const [mouseOver, setMouseOver] = useState(false)
    const requestRef = useRef(null)
    const {updateDetails} = useDetails()
    const {uploadImage} = useHttpRequest()

    const addProfilePicture = () =>{
        pictureRef.current.click()
    }

    const checkValidityErrors = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if(!details?.profilePicture){
            setErrors([...errors, {id:1, message: "upload a profile picture"}])
            return true
        }
        if(nameRef.current.value == ''){
            setErrors([...errors, {id:2, message :"name is required and can not be empty"}])
            return true
        }
        if(emailRef.current.value == ''){
            setErrors([...errors, {id:3, message :"email is required and can not be empty"}])
            return true
        }
        if(!emailPattern.test(emailRef.current.value)){
            setErrors([...errors, {id:4, message :"email must be a valid email"}])
            return true
        }

        return false
    }

    const clickHandler = () => {
        let inputErrors = checkValidityErrors()

        if(inputErrors){
            return
        }

        nextProcess()
    }

    const getFile = () => {
        let file = pictureRef.current.files[0]
        uploadImage(file)
        setErrors([])
        // let fileUrl = URL.createObjectURL(file)
        // setProfilePicture(fileUrl)
        // console.log(fileUrl)
    }

    const storeName = () =>{
        const name = nameRef.current.value
        setErrors([])
        updateDetails(name, "name")
    }

    const storeEmail = () =>{
        const email = emailRef.current.value
        setErrors([])
        updateDetails(email, "email")
    }

    const storeRequest = () =>{
        const request = requestRef.current.value
        updateDetails(request, "request")
    }


    return (
            <form className={`${step === 2? "flex" : "hidden"} form h-[max-content] rounded-[32px] w-full lg:border-[1px] lg:bg-[#08252B] lg:border-[#0E464F]  lg:p-[24px] flex-col gap-[24px]`}>
                <div className='w-full relative h-[max-content] gap-[32px] items-center justify-center pb-[48px] p-[24px] bg-[#052228] flex flex-col rounded-[24px] border-[1px] border-[#07373F]'>
                    <p className='font-roboto text-left w-full text-[16px] text-grey'>Upload Profile Photo</p>
                    <div className='w-full h-[200px] flex justify-center items-center lg:bg-[#00000020]'>
                        <input onChange={getFile} ref={pictureRef} type="file" accept='.jpeg, .jpg, .png' className=' absolute invisible w-[20px] h-[20px]' />
                        <button onMouseOver={()=>{setMouseOver(true)}} onMouseOut={()=>{setMouseOver(false)}} onClick={addProfilePicture} type='button' className='w-[240px] relative h-[240px] rounded-[32px] bg-[#0E464F] border-[2px] border-[#24A0B5]'>
                            {
                                errors.length !== 0? 
                                errors[0]?.id === 1? <span aria-live="assertive" className=' flex w-[max-content] left-[45px] p-[7px] px-[20px] text-[12px] font-roboto absolute text-[#f0dd2c] bg-[#00000050] top-[20px] rounded-[10px]'>{errors[0]?.message}</span> : <></>:
                                <></>
                            }
                            <span className='w-full h-full rounded-[inherit]'>
                            <span className={`${details?.profilePicture?(mouseOver ? 'flex' : 'hidden') : 'flex'}
                                    flex-col z-[5] w-full h-full bg-[#00000030] relative p-[20px] items-center justify-center gap-[10px]`}>
                                    <img className='w-[32px] h-[32px]' src="/cloud-download.svg" alt="download-image" />
                                    <p className='text-center text-[16px] font-roboto text-grey'> Drag & drop or click to upload</p>
                                </span>
                                <img src={details?.profilePicture || " "} alt="profile-picture" className={`${details?.profilePicture? 'flex':'hidden'} w-full absolute top-0 left-0 h-full rounded-[inherit]`}/>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='w-full h-[4px] bg-[#07373F]'></div>

                <label htmlFor="name" className='w-full flex text-grey font-roboto flex-col gap-[8px]'>
                    <p>Enter your name *</p>
                    <input ref={nameRef} placeholder='enter your name' defaultValue={details?.name} onChange={storeName} required type="text" name='name' className='w-full h-[48px] p-[12px] rounded-[12px] border-[1px] border-[#07373F] ' />
                    {
                         errors.length !== 0? 
                         errors[0]?.id === 2? <span aria-live="assertive" className='flex w-full text-left text-[12px] font-roboto text-[#f0dd2c]'>{errors[0]?.message}</span> : <></>:
                         <></>
                    }
                </label>

                <label htmlFor="email" className='w-full flex text-grey font-roboto flex-col gap-[8px]'>
                    <p>Enter your email *</p>
                    <span className='mail relative flex items-center w-full h-[max-content]'>
                        <input ref={emailRef} defaultValue={details?.email} onChange={storeEmail} required type="text" placeholder="hello@avioflagos.io" name='email' className='email relative w-full h-[48px] pl-[40px]  p-[12px] font-roboto text-grey rounded-[12px] border-[1px] border-[#07373F] ' />
                    </span>
                    {
                        errors.length !== 0? 
                        (
                            errors[0]?.id === 3? <span aria-live="assertive" className='flex w-full text-left text-[12px] font-roboto text-[#f0dd2c]'>{errors[0]?.message}</span> : 
                            errors[0]?.id === 4? <span aria-live="assertive" className='flex w-full text-left text-[12px] font-roboto text-[#f0dd2c]'>{errors[0]?.message}</span> :
                            <></>
                        ):<></>
                    }
                </label>

                <label htmlFor="name" className='w-full flex text-grey font-roboto flex-col gap-[8px]'>
                    <p>Special request?</p>
                    <textarea required ref={requestRef} placeholder='Text area' onChange={storeRequest} className="r-[12px] resize-none w-full h-[127px] border-[1px] border-[#07373F] text-roboto text-grey p-[12px] rounded-[12px]" defaultValue={details?.request}  name="request" id="request"></textarea>
                </label>
                
                <div className='h-[max-content] w-full gap-[24px] flex flex-col-reverse lg:flex-row '>
                    <Button clickAction={previousProcess} text="Back" type='zilch'/>
                    <Button clickAction={clickHandler} confirm={true} text="Get My Free Ticket" type='accent'/>
                </div> 
            </form>
  )
}
