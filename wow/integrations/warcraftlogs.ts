export const constructWarcraftLogsUrl = (
	region: string,
	server: string,
	character_name: string
) => {
	return `https://www.warcraftlogs.com/character/${region}/${server}/${character_name}`;
};
