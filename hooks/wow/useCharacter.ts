import axios, { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";

interface Character {
	characterName: string;
	realm: string;
	region: string;
}
const useCharacter = ({ characterName, realm, region }: Character) => {
	return useMutation<any, AxiosError>("character", async () => {
		const { data } = await axios.get(
			`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return data;
	});
};

export default useCharacter;
