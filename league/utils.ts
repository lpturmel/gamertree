import { RiotRegions } from "../types/entities/League";

export const constructApiUrl = (region: RiotRegions, path: string) => {
	return `https://${region}.api.riotgames.com/lol/summoner/v4${path}`;
};

export const leagueRegions = [
	"NA1",
	"BR1",
	"EUN1",
	"EUW1",
	"JP1",
	"KR",
	"LA1",
	"LA2",
	"OC1",
	"RU",
	"TR1",
];
