import { FunctionComponent, useEffect } from "react";
import LeagueFrom from "../../components/GameForms/LeagueForm";
import Select from "../../components/intrinsic/Select";
import WowForm from "../../components/GameForms/WowForm";
import { useRecoilState } from "recoil";
import { setStateValue } from "../../utils/react";
import {
    FormState,
    IFormState,
    resetState,
} from "../../atoms/GameForm/FormState";

export interface GameFormProps {
    entity: any;
}

const GameForm: FunctionComponent<GameFormProps> = ({ entity }) => {
    const [formState, setFormState] = useRecoilState(FormState);
    const entities = [
        { value: "wow", label: "World of Warcraft" },
        { value: "lol", label: "League of Legends" },
    ];

    useEffect(() => {
        if (entity) {
            setFormState({
                entityType: entity.game,
                character_name: entity.character_name,
                summoner_name: entity.account_name,
                region: entity.region,
                realm: entity.realm,
            });
        }
    }, [entity]);

    return (
        <div className="container mx-auto max-w-lg space-y-2">
            <div className="space-y-2">
                <p>Entity type</p>
                <Select
                    value={formState.entityType}
                    placeholder="Select an entity"
                    onChange={(e) => {
                        resetState(setFormState);
                        setStateValue<IFormState>({
                            setState: setFormState,
                            key: "entityType",
                            new_value: e.target.value,
                        });
                    }}
                    elements={entities}
                />
            </div>

            {formState.entityType === "wow" ? (
                <WowForm />
            ) : (
                formState.entityType === "lol" && <LeagueFrom />
            )}
        </div>
    );
};
export default GameForm;
