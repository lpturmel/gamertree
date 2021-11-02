import { LeagueEntity } from "./entities/League";
import { WowEntity } from "./entities/Wow";

export interface User {
	user_id: string;
	email: string;
	username: string;
	entities: WowEntity | LeagueEntity;
}
