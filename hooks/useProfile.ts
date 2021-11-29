import { useQueryClient } from "react-query";
import { Profile } from "../types/Profile";

const useProfile = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData<Profile>("profile");
};

export default useProfile;
