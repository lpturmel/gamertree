import { FunctionComponent } from "react";
import { constructLolChessUrl } from "../league/integrations/lolchess";
import { constructOpGgUrl } from "../league/integrations/opgg";
import { LeagueEntity } from "../types/entities/League";
import EntityWrapper from "./EntityWrapper";
import LeagueLogo from "./icons/LeagueLogo";
import LolChess from "./icons/LolChess";
import OpGg from "./icons/OpGg";

export interface LeagueEntityItemProps {
	entity: LeagueEntity;
}

const LeagueEntityItem: FunctionComponent<LeagueEntityItemProps> = ({
	entity,
}) => {
	return (
		<EntityWrapper entity={entity}>
			<LeagueLogo />
			<p className="font-semibold">{entity.account_name}</p>

			<div className="hstack py-2 rounded-full px-4 justify-center  items-center absolute top-[45px] right-8 space-x-2 bg-secondary">
				<a
					className="flex items-center justify-center"
					href={constructLolChessUrl(
						entity.region,
						entity.account_name
					)}
					target="_blank"
					rel="noreferrer"
				>
					<LolChess />
				</a>
				<a
					className="flex items-center justify-center"
					href={constructOpGgUrl(entity.account_name)}
					target="_blank"
					rel="noreferrer"
				>
					<OpGg />
				</a>
			</div>
		</EntityWrapper>
	);
};

export default LeagueEntityItem;
