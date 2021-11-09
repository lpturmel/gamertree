import { FunctionComponent } from "react";
import { WowEntity } from "../types/entities/Wow";
import WowLogo from "./WowLogo";

export interface WowEntityItemProps {
	entity: WowEntity;
}

const WowEntityItem: FunctionComponent<WowEntityItemProps> = ({ entity }) => {
	return (
		<div className="flex flex-row rounded-md border-2 space-x-2 border-gray-200 p-2 items-center justify-start">
			<WowLogo />
			<p className="font-semibold">{entity.character_name}</p>
			{/* <p>{entity.realm}</p>
			<p>{entity.region}</p> */}
		</div>
	);
};

export default WowEntityItem;
