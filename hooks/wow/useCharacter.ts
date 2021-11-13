import axios, { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { CharacterResponse } from "../../types/responses/RaiderIo";

interface Character {
	characterName: string;
	realm: string;
	region: string;
}
const useCharacter = () => {
	return useMutation<CharacterResponse, AxiosError, Character>(
		"character",
		async (character) => {
			const { data } = await axios.get(
				`https://raider.io/api/v1/characters/profile?region=${character.region}&realm=${character.realm}&name=${character.characterName}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			return data;
		}
	);
};

export default useCharacter;
