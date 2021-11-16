export interface WowEntity {
	user_id: string;
	entity_id: string;
	character_name: string;
	region: string;
	realm: string;
	game: "wow";
    public_username?: string;
}
