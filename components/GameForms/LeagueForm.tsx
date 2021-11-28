import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSummoner from "../../hooks/league/useSummoner";
import useNewEntity from "../../hooks/useNewEntity";
import { leagueRegions } from "../../league/utils";
import { LeagueEntity, RiotRegions } from "../../types/entities/League";
import Input from "../intrinsic/Input";
import Select from "../intrinsic/Select";
import Spinner from "../intrinsic/Spinner";

export interface LeagueFormProps {}

const LeagueForm: React.FunctionComponent<LeagueFormProps> = () => {
    const { mutate, data, isLoading, isError, error, status } = useSummoner();
    const router = useRouter();
    const [region, setRegion] = useState("");
    const [summonerName, setSummonerName] = useState("");
    const newEntity = useNewEntity<LeagueEntity>("lol");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate({
            summoner_name: summonerName,
            region: region as RiotRegions,
        });
    };
    useEffect(() => {
        if (status === "success") {
            newEntity.mutate({
                region: region as RiotRegions,
                account_name: data.name,
                entity_id: "",
                user_id: "",
                game: "lol",
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
                            placeholder="Select a region..."
                            onChange={(e) => setRegion(e.target.value)}
                            elements={leagueRegions}
                        />
                    </div>
                    {region !== "" && (
                        <>
                            <div className="vstack space-y-2">
                                <label>Summoner name</label>
                                <Input
                                    value={summonerName}
                                    onChange={(e) =>
                                        setSummonerName(e.target.value)
                                    }
                                    placeholder="Summoner name..."
                                />
                            </div>
                            <button
                                disabled={
                                    isLoading ||
                                    region === "" ||
                                    summonerName === ""
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
