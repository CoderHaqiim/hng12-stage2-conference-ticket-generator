import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'

function App() {
const [step, setStep] = useState(1)
  return (
    <div className=' flex flex-col gap-[48px] lg:gap-[80px] items-center py-[48px] lg:py-[34px] px-[20px] lg-px-[0] min-h-[600px] w-full h-[auto] bg-[#02191d]'>
      <Header/>
      <div className='w-full h-auto flex items-start justify-center'>
        <Card step={step} setStep={setStep}/>
      </div>
    </div>
  )
}

export default App
