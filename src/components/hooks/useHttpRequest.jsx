import { useContext } from 'react';
import { ProfilePictureContext } from '../globalStates/profilePictureContext';
import useDetails from './useDetails';
import { ImageLoadingContext } from '../globalStates/imageLoadingContext';
import axios from 'axios'

export default function useHttpRequest() {
    const {setProfilePicture} = useContext(ProfilePictureContext)
    const {setImageLoading} = useContext(ImageLoadingContext)
    const {updateDetails} = useDetails()
    const webName = import.meta.env.VITE_WEB_NAME;
    const webId = import.meta.env.VITE_WEB_ID;

    const uploadImage = async (image) => {
        if (!image) {
           alert ("upload a jpg, jpeg or png file");
          return;
        }

        setImageLoading(true)
    
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", webId);
    
        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${webName}/image/upload`,
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
        finally{
          setImageLoading(false)
        }
      };

      return {uploadImage}
}
