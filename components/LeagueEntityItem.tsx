import { FunctionComponent } from "react";
import { LeagueEntity } from "../types/entities/League";
import LeagueLogo from "./LeagueLogo";

export interface LeagueEntityItemProps {
	entity: LeagueEntity;
}

const LeagueEntityItem: FunctionComponent<LeagueEntityItemProps> = ({
	entity,
}) => {
	return (
		<div className="flex flex-row">
			<LeagueLogo />
			<p>{entity.account_name}</p>
		</div>
	);
};

export default LeagueEntityItem;
