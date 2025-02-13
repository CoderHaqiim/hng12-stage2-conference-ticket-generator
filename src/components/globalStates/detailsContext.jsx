import {useState, createContext, useEffect} from 'react'

export const DetailsContext = createContext()


export default function DetailsProvider({children}){
    const [details,setDetails] = useState({})
    
  return (
    <DetailsContext.Provider value={{details, setDetails}}>
        {children}
    </DetailsContext.Provider>
  )
}