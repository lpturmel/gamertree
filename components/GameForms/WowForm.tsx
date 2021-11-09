import { FunctionComponent, useEffect, useState } from "react";
import useNewEntity from "../../hooks/useNewEntity";
import useCharacter from "../../hooks/wow/useCharacter";
import { WowEntity } from "../../types/entities/Wow";
import { regionMap } from "../../wow/regions";
import servers from "../../wow/servers";
import Input from "../Input";
import Select from "../Select";
import Spinner from "../Spinner";

export interface WowFormProps {}

const WowForm: FunctionComponent<WowFormProps> = () => {
	const [region, setRegion] = useState("");
	const [realm, setRealm] = useState("");
	const [characterName, setCharacterName] = useState("");

	const { mutate, isLoading, error, isError, status } = useCharacter({
		region: regionMap[region],
		realm,
		characterName,
	});
	const newEntity = useNewEntity<WowEntity>("wow");
	const add = () => {
		mutate();
	};

	useEffect(() => {
		if (status === "success") {
			newEntity.mutate({
				region: regionMap[region],
				realm,
				character_name: characterName,
				entity_id: "",
				user_id: "",
				game: "wow",
			});
		}
	}, [status]);

	return (
		<div>
			<form
				className="flex flex-col space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					add();
				}}
			>
				<div>
					<label>Region</label>
					<Select
						placeholder="Select a region"
						onChange={(e) => setRegion(e.target.value)}
						elements={Object.keys(servers)}
					/>
				</div>
				<div>
					<label>Realm</label>
					{region !== "" && (
						<Select
							placeholder="Select a realm"
							elements={servers[region]}
							onChange={(e) => setRealm(e.target.value)}
						/>
					)}
				</div>
				<div>
					<label>Character name</label>
					<Input
						onChange={(e) => setCharacterName(e.target.value)}
						placeholder="Character name..."
					/>
				</div>

				<button
					disabled={
						isLoading ||
						region === "" ||
						characterName === "" ||
						realm === ""
					}
					type="submit"
					className="btn-main"
				>
					<div className="flex flex-row justify-center items-center space-x-2">
						<p> Add Character</p>
						{isLoading && <Spinner />}
					</div>
				</button>
				{isError && (
					<p className="text-red-500">
						{error.response.data.message}
					</p>
				)}
			</form>
		</div>
	);
};

export default WowForm;
