import { FunctionComponent } from "react";
import { WowEntity } from "../types/entities/Wow";
import { constructRaiderIoUrl } from "../wow/integrations/raiderio";
import { constructRaidBotsUrl } from "../wow/integrations/raidbots";
import { constructWarcraftLogsUrl } from "../wow/integrations/warcraftlogs";
import EntityWrapper from "./EntityWrapper";
import RaiderIo from "./icons/RaiderIo";
import RaidBots from "./icons/RaidBots";
import WarcraftLogs from "./icons/WarcraftLogs";
import WowLogo from "./icons/WowLogo";

export interface WowEntityItemProps {
    entity: WowEntity;
}

const WowEntityItem: FunctionComponent<WowEntityItemProps> = ({ entity }) => {
    return (
        <EntityWrapper entity={entity}>
            <WowLogo />
            <p className="font-semibold">{entity.character_name}</p>
            <div className="hstack py-2 rounded-full px-4 bg-secondary justify-center  items-center right-8 space-x-2 absolute r-4">
                <a
                    className="flex items-center justify-center"
                    href={constructRaiderIoUrl(
                        entity.region,
                        entity.realm,
                        entity.character_name
                    )}
                    target="_blank"
                    rel="noreferrer"
                >
                    <RaiderIo />
                </a>
                <a
                    className="flex items-center justify-center"
                    href={constructRaidBotsUrl(
                        entity.region,
                        entity.realm,
                        entity.character_name
                    )}
                    target="_blank"
                    rel="noreferrer"
                >
                    <RaidBots />
                </a>
                <a
                    className="flex items-center justify-center"
                    href={constructWarcraftLogsUrl(
                        entity.region,
                        entity.realm,
                        entity.character_name
                    )}
                    target="_blank"
                    rel="noreferrer"
                >
                    <WarcraftLogs />
                </a>
            </div>
        </EntityWrapper>
    );
};

export default WowEntityItem;
