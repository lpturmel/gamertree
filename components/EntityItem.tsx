import { FunctionComponent } from "react";
import { Entity } from "../types/Entity";
import WowEntityItem from "../components/WowEntityItem";
import LeagueEntityItem from "../components/LeagueEntityItem";

export interface EntityItemProps {
    entity: Entity;
}

const EntityItem: FunctionComponent<EntityItemProps> = ({ entity }) => {
    return (
        <>
            {entity.game === "wow" ? (
                <WowEntityItem entity={entity} />
            ) : (
                <LeagueEntityItem entity={entity} />
            )}
        </>
    );
};
export default EntityItem;
