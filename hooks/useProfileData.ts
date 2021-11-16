import { useQueryClient } from "react-query"
import { Profile } from "../types/Profile";
import { useEffect } from "react";

const useProfileData = () => {

    const queryClient = useQueryClient();
    const profile = queryClient.getQueryData<Profile>("profile");
    
    useEffect(() => {
       console.log("Profile changed from hook") 
    }, [profile])

    return profile
}

export default useProfileData;
