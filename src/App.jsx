import { useState, useEffect, useContext} from 'react'
import Header from './components/header'
import Card from './components/card'
import { DetailsContext } from './components/globalStates/detailsContext'
import useStorage from './components/hooks/useStorage'

function App() {
  const {details, setDetails} = useContext(DetailsContext)
  const [step, setStep] = useState(() => Number(localStorage.getItem("currentStep")) || 1 );
  const {addToStorage} = useStorage()

  useEffect(() => {
    const userDetails = localStorage.getItem("details");
    userDetails && setDetails(JSON.parse(userDetails));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentStep", step);
  }, [step]);

  useEffect(()=>{
    addToStorage(details)
  },[details])

  return (
    <div className=' flex flex-col gap-[32px] lg:gap-[80px] items-center py-[48px] min-h-[1249px] lg:py-[34px] px-[20px] lg-px-[0] min-h-[600px] w-full h-[auto]'>
      <Header/>
      <div className='w-full h-auto flex items-start justify-center'>
        <Card step={step} setStep={setStep}/>
      </div>
    </div>
  )
}

export default App
