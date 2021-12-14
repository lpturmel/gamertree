import { FunctionComponent } from "react";
import { leagueRegions } from "../../league/utils";
import Input from "../intrinsic/Input";
import Select from "../intrinsic/Select";
import { FormState, IFormState } from "../../atoms/GameForm/FormState";
import { useRecoilState } from "recoil";
import { setStateValue } from "../../utils/react";

export interface LeagueFormProps {}

const LeagueForm: FunctionComponent<LeagueFormProps> = () => {
    const [formState, setFormState] = useRecoilState(FormState);

    return (
        <div className="vstack">
            <div className="vstack space-y-4">
                <div className="vstack space-y-2">
                    <label>Region</label>
                    <Select
                        placeholder="Select a region"
                        value={formState.region}
                        onChange={(e) =>
                            setStateValue<IFormState>({
                                setState: setFormState,
                                key: "region",
                                new_value: e.target.value,
                            })
                        }
                        elements={leagueRegions}
                    />
                </div>
                {formState.region !== "" && (
                    <>
                        <div className="vstack space-y-2">
                            <label>Summoner name</label>
                            <Input
                                value={formState.summoner_name}
                                onChange={(e) =>
                                    setStateValue<IFormState>({
                                        setState: setFormState,
                                        key: "summoner_name",
                                        new_value: e.target.value,
                                    })
                                }
                                placeholder="Summoner name..."
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LeagueForm;
