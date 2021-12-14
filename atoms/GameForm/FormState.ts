import { atom } from "recoil";

export interface IFormState {
    entityType: null | "wow" | "lol";
    region: string;
    realm?: string;
    character_name?: string;
    summoner_name?: string;
}

export const FormState = atom<IFormState>({
    key: "FormState",
    default: {
        entityType: null,
        region: "",
        realm: "",
        character_name: "",
        summoner_name: "",
    },
});

export const resetState = (setState: Function) => {
    setState({
        entityType: null,
        region: "",
        realm: "",
        character_name: "",
        summoner_name: "",
    });
};
