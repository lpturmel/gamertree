import { FunctionComponent } from "react";
import regions from "../../wow/servers";
import Input from "../intrinsic/Input";
import Select from "../intrinsic/Select";
import { FormState, IFormState } from "../../atoms/GameForm/FormState";
import { useRecoilState } from "recoil";
import { setStateValue } from "../../utils/react";

export interface WowFormProps {}

const WowForm: FunctionComponent<WowFormProps> = () => {
    const [formState, setFormState] = useRecoilState(FormState);

    const regionEntries = Object.keys(regions).map((region: any) => ({
        value: regions[region].value,
        label: regions[region].label,
    }));

    return (
        <div>
            <div className="flex flex-col space-y-2">
                <label>Region</label>
                <Select
                    value={formState.region}
                    placeholder="Select a region"
                    onChange={(e) =>
                        setStateValue<IFormState>({
                            setState: setFormState,
                            key: "region",
                            new_value: e.target.value,
                        })
                    }
                    elements={regionEntries}
                />
            </div>
            <div>
                {formState.region !== "" && (
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Realm</label>

                            <Select
                                placeholder="Select a realm"
                                value={formState.realm}
                                elements={regions[formState.region].servers.map(
                                    (realm: string) => ({
                                        value: realm,
                                        label: realm,
                                    })
                                )}
                                onChange={(e) =>
                                    setStateValue<IFormState>({
                                        setState: setFormState,
                                        key: "realm",
                                        new_value: e.target.value,
                                    })
                                }
                            />
                        </div>
                        {formState.realm && formState.realm !== "" && (
                            <>
                                <div className="flex flex-col space-y-2">
                                    <label>Character name</label>
                                    <Input
                                        onChange={(e) =>
                                            setStateValue<IFormState>({
                                                setState: setFormState,
                                                key: "character_name",
                                                new_value: e.target.value,
                                            })
                                        }
                                        placeholder="Character name..."
                                    />
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WowForm;
