import axios from "axios"
import { useMutation } from "react-query"


const useUsernameAvailability = () => {
    return useMutation("username-availability", async (username: string) => {
        const { data } = await axios.get(`/api/username?username=${username}`);
        return data;
    })
}

export default useUsernameAvailability;
