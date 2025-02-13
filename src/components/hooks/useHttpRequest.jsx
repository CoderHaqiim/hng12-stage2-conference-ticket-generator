import { useContext } from 'react';
import { ProfilePictureContext } from '../globalStates/profilePictureContext';
import useDetails from './useDetails';
import axios from 'axios'

export default function useHttpRequest() {
    const {setProfilePicture} = useContext(ProfilePictureContext)
    const {updateDetails} = useDetails()

    const uploadImage = async (image) => {
        if (!image) {
           alert ("upload a jpg or png file");
          return;
        }
    
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "cactusplant");
    
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dfzc5vqlk/image/upload",
            formData
          );
          let pic = response.data.secure_url

          setProfilePicture(pic);
          updateDetails(pic, "profilePicture")

        } catch (error) {
            if(!navigator.onLine){
              alert("Error uploading image: Check your network and try again");
            }
            else alert('Some error occured while trying to upload your picture 😔')
      
          //  console.error(error)
        }
      };

      return {uploadImage}
}
