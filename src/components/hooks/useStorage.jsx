import { useEffect, useContext } from "react"
import { DetailsContext } from "../globalStates/detailsContext"

export default function useStorage() {
    const {setDetails, details} = useContext(DetailsContext) 

    function addToStorage(item){
      if (item && Object.keys(item).length > 0) {
        localStorage.setItem("details", JSON.stringify(item));
      }
    }
  return {addToStorage}
}
