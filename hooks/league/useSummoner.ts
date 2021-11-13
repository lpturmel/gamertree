import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { constructApiUrl } from "../../league/utils";
import { RiotRegions } from "../../types/entities/League";
import { SummonerResponse } from "../../types/responses/RiotApi";

interface Summoner {
	summoner_name: string;
	region: RiotRegions;
}

const useSummoner = () => {
	return useMutation<SummonerResponse, AxiosError, Summoner>(
		"character",
		async ({ summoner_name, region }) => {
			const { data } = await axios.get(
				`/api/summoner?summoner_name=${summoner_name}&region=${region}`
			);

			return data;
		}
	);
};

export default useSummoner;
