import { useContext } from 'react'
import { DetailsContext } from '../globalStates/detailsContext'

export default function useDetails() {
    const {setDetails, details} = useContext(DetailsContext)

    const updateDetails = (item,name) => {
        setDetails({...details, [name]:item})
    }

  return {updateDetails}
}