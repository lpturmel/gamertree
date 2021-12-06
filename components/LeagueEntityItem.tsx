import { FunctionComponent } from "react";
import { constructLolChessUrl } from "../league/integrations/lolchess";
import { constructUGgUrl } from "../league/integrations/ugg";
import { constructOpGgUrl } from "../league/integrations/opgg";
import { LeagueEntity } from "../types/entities/League";
import EntityWrapper from "./EntityWrapper";
import LeagueLogo from "./icons/LeagueLogo";
import LolChess from "./icons/LolChess";
import OpGg from "./icons/OpGg";
import UGg from "./icons/Ugg";

export interface LeagueEntityItemProps {
    entity: LeagueEntity;
}

const LeagueEntityItem: FunctionComponent<LeagueEntityItemProps> = ({
    entity,
}) => {
    return (
        <EntityWrapper entity={entity}>
            <div className="hstack items-center space-x-4">
                <LeagueLogo />
                <p className="font-semibold">{entity.account_name}</p>
            </div>

            <div
                onClick={(e) => e.stopPropagation()}
                className="hstack py-2 rounded-full justify-center items-center space-x-2 bg-secondary"
            >
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
                <a
                    className="flex items-center justify-center"
                    href={constructUGgUrl(entity.region, entity.account_name)}
                    target="_blank"
                    rel="noreferrer"
                >
                    <UGg />
                </a>
            </div>
        </EntityWrapper>
    );
};

export default LeagueEntityItem;
