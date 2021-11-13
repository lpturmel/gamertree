import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import useNewEntity from "../../hooks/useNewEntity";
import useCharacter from "../../hooks/wow/useCharacter";
import { WowEntity } from "../../types/entities/Wow";
import { regionMap } from "../../wow/regions";
import servers from "../../wow/servers";
import Input from "../intrinsic/Input";
import Select from "../intrinsic/Select";
import Spinner from "../intrinsic/Spinner";

export interface WowFormProps {}

const WowForm: FunctionComponent<WowFormProps> = () => {
	const router = useRouter();
	const [region, setRegion] = useState("");
	const [realm, setRealm] = useState("");
	const [characterName, setCharacterName] = useState("");
	const { mutate, isLoading, error, isError, status, data } = useCharacter();

	const serverEntries = Object.keys(servers);
	const newEntity = useNewEntity<WowEntity>("wow");

	const add = () => {
		mutate({
			region: regionMap[region],
			realm,
			characterName,
		});
	};

	useEffect(() => {
		if (status === "success") {
			newEntity.mutate({
				region: regionMap[region],
				realm,
				character_name: data.name,
				entity_id: "",
				user_id: "",
				game: "wow",
			});
		}
	}, [status]);

	useEffect(() => {
		if (newEntity.status === "success") {
			router.push("/me");
		}
	}, [newEntity.data]);
	return (
		<div>
			<form
				className="flex flex-col space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					add();
				}}
			>
				<div className="flex flex-col space-y-2">
					<label>Region</label>
					<Select
						placeholder="Select a region"
						onChange={(e) => setRegion(e.target.value)}
						elements={serverEntries}
					/>
				</div>
				<div>
					{region !== "" && (
						<div className="flex flex-col space-y-4">
							<div className="flex flex-col space-y-2">
								<label>Realm</label>

								<Select
									placeholder="Select a realm"
									elements={servers[region]}
									onChange={(e) => setRealm(e.target.value)}
								/>
							</div>
							{realm !== "" && (
								<>
									<div className="flex flex-col space-y-2">
										<label>Character name</label>
										<Input
											onChange={(e) =>
												setCharacterName(e.target.value)
											}
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
								</>
							)}
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default WowForm;
