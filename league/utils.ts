import { RiotRegions } from "../types/entities/League";

export const constructApiUrl = (region: RiotRegions, path: string) => {
    return `https://${region}.api.riotgames.com/lol/summoner/v4${path}`;
};

export const leagueRegions = [
    { value: "NA1", label: "NA" },
    { value: "BR1", label: "BR" },
    { value: "EUN1", label: "EUN" },
    { value: "EUW1", label: "EUW" },
    { value: "JP1", label: "JP" },
    { value: "KR", label: "KR" },
    { value: "LA1", label: "LA1" },
    { value: "LA2", label: "LA2" },
    { value: "OC1", label: "OC1" },
    { value: "RU", label: "RU" },
    { value: "TR1", label: "TR" },
];
