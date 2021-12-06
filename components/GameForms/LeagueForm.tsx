import { useRouter } from "next/router";
import { useEffect, FormEvent, FunctionComponent } from "react";
import useSummoner from "../../hooks/league/useSummoner";
import useNewEntity from "../../hooks/useNewEntity";
import { leagueRegions } from "../../league/utils";
import { LeagueEntity, RiotRegions } from "../../types/entities/League";
import Input from "../intrinsic/Input";
import Select from "../intrinsic/Select";
import Spinner from "../intrinsic/Spinner";
import useProfile from "../../hooks/useProfile";
import { FormState, IFormState } from "../../atoms/GameForm/FormState";
import { useRecoilState } from "recoil";
import { setStateValue } from "../../utils/react";

export interface LeagueFormProps {}

const LeagueForm: FunctionComponent<LeagueFormProps> = () => {
    const { mutate, data, isLoading, isError, error, status } = useSummoner();
    const [formState, setFormState] = useRecoilState(FormState);
    const newEntity = useNewEntity<LeagueEntity>("lol");
    const profile = useProfile();
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            summoner_name: formState.summoner_name,
            region: formState.region as RiotRegions,
        });
    };
    useEffect(() => {
        if (status === "success") {
            newEntity.mutate({
                region: formState.region as RiotRegions,
                account_name: data.name,
                entity_id: "",
                user_id: "",
                game: "lol",
                public_username: profile.public_username,
            });
        }
    }, [status]);

    useEffect(() => {
        if (newEntity.status === "success") {
            router.push("/account/me");
        }
    }, [newEntity.data]);
    return (
        <div className="vstack">
            <form onSubmit={handleSubmit}>
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
                            <button
                                disabled={
                                    isLoading ||
                                    formState.region === "" ||
                                    formState.summoner_name === ""
                                }
                                type="submit"
                                className="btn-main"
                            >
                                <div className="hstack justify-center items-center space-x-2">
                                    <p> Add Summoner </p>
                                    {isLoading && <Spinner />}
                                </div>
                            </button>
                            {isError && (
                                <p className="text-red-500">
                                    {error.response.status === 404 &&
                                        "Summoner not found"}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LeagueForm;
