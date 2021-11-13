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

			<div className="py-1 rounded-full px-4 border-2 border-gray-600 justify-center  items-center absolute top-[45px] right-8 flex space-x-2 flex-row bg-background">
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
