import {useState, createContext} from 'react'

export const ImageLoadingContext = createContext()

export default function ImageLoadingProvider({children}){
    const [imageLoading,setImageLoading] = useState(false)
  return (
    <ImageLoadingContext.Provider value={{imageLoading, setImageLoading}}>
        {children}
    </ImageLoadingContext.Provider>
  )
}
