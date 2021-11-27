import { FunctionComponent } from "react";
import { Entity } from "../types/Entity";
import WowEntityItem from "../components/WowEntityItem";
import LeagueEntityItem from "../components/LeagueEntityItem";
export interface EntitiesProps {
    entities: Entity[];
}

const Entities: FunctionComponent<EntitiesProps> = ({ entities }) => {
    return (
        <div className="vstack space-y-4">
            {entities.map((entity) => (
                <div key={entity.entity_id}>
                    {entity.game === "wow" ? (
                        <WowEntityItem entity={entity} />
                    ) : (
                        <LeagueEntityItem entity={entity} />
                    )}
                </div>
            ))}
        </div>
    );
};
export default Entities;
