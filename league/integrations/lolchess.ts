import { RiotRegions } from "../../types/entities/League";

export const constructLolChessUrl = (
	region: RiotRegions,
	account_name: string
) => {
	const transformed_region = region.replace("1", "").toLowerCase();
	return `https://lolchess.gg/profile/${transformed_region}/${account_name}`;
};
