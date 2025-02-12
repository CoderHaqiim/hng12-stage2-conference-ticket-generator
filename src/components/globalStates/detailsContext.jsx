import {useState, createContext} from 'react'

export const DetailsContext = createContext()

export default function DetailsProvider({children}){
    const [details,setDetails] = useState({ticketType:0,numberOfTickets:null, name:null, profilePic:null, email:null, request:null })
    
  return (
    <DetailsContext.Provider value={{details, setDetails}}>
        {children}
    </DetailsContext.Provider>
  )
}