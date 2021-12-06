import { RiotRegions } from "../../types/entities/League";

export const constructUGgUrl = (region: RiotRegions, summoner_name: string) => {
    return `https://u.gg/lol/profile/${region.toLowerCase()}/${summoner_name}`;
};
