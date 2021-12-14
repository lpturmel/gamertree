import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CharacterResponse } from "../types/responses/RaiderIo";
import { RiotRegions } from "../types/entities/League";
import { SummonerResponse } from "../types/responses/RiotApi";

interface Character {
    character_name: string;
    realm: string;
    region: string;
}
interface Summoner {
    summoner_name: string;
    region: RiotRegions;
}
const useEntityValidation = () => {
    return useMutation<
        SummonerResponse | CharacterResponse,
        AxiosError,
        Summoner & Character & { game: "wow" | "lol" }
    >(
        "character",
        async ({ summoner_name, region, realm, character_name, game }) => {
            let data = null;
            switch (game) {
                case "wow":
                    const characterResponse = await axios.get(
                        `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${character_name}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    data = characterResponse.data;
                    break;
                case "lol":
                    const summonerResonse = await axios.get(
                        `/api/summoner?summoner_name=${summoner_name}&region=${region}`
                    );
                    data = summonerResonse.data;
                    break;
            }

            return data;
        }
    );
};
export default useEntityValidation;
