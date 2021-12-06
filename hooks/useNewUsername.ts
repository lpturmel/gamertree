import axios from "axios";
import { useMutation, useQueryClient, QueryClient } from "react-query";
import { Profile } from "../types/Profile";

const useNewUsername = () => {
    const queryClient = useQueryClient();
    return useMutation(
        "new-username",
        async (username: string) => {
            const { data } = await axios.post("/api/username", {
                username,
            });

            return data;
        },
        {
            onSuccess: (response) => addUsernameToCache(response, queryClient),
        }
    );
};

function addUsernameToCache(response: Profile, queryClient: QueryClient) {
    queryClient.setQueryData("profile", { ...response });
}
export default useNewUsername;
