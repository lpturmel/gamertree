export const constructRaiderIoUrl = (
	region: string,
	server: string,
	character_name: string
) => {
	return `https://raider.io/characters/${region}/${server}/${character_name}`;
};
