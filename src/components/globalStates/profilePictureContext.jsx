import {createContext, useState} from "react";

export const ProfilePictureContext = createContext()

export default function ProfilePictureProvider ({ children }) {
    const [profilePicture, setProfilePicture] = useState(null);
  
    return (
      <ProfilePictureContext.Provider value={{ profilePicture, setProfilePicture}}>
        {children}
      </ProfilePictureContext.Provider>
    );
  };