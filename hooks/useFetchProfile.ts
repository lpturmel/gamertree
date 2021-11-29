import axios from "axios";
import { useQuery } from "react-query";
import { Profile } from "../types/Profile";

const useProfile = () => {
    return useQuery<Profile>("profile", async () => {
        const { data } = await axios.get("/api/profile");
        return data;
    });
};

export default useProfile;
