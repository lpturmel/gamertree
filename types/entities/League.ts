export interface LeagueEntity {
	user_id: string;
	entity_id: string;
	account_name: string;
	region: RiotRegions;
	game: "lol";
}

export type RiotRegions =
	| "NA1"
	| "BR1"
	| "EUN1"
	| "EUW1"
	| "JP1"
	| "KR"
	| "LA1"
	| "LA2"
	| "OC1"
	| "RU"
	| "TR1";
