export const constructRaidBotsUrl = (
    region: string,
    server: string,
    character_name: string
) => {
    return `https://www.raidbots.com/simbot/quick?region=${region.toLowerCase()}&realm=${server}&name=${character_name}`;
};
