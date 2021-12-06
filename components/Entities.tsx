import { Fragment, FunctionComponent } from "react";
import { Entity } from "../types/Entity";
import EntityUpdate from "../components/modals/EntityUpdate";
import { CgSearch } from "react-icons/cg";
import EntityItem from "./EntityItem";

export interface EntitiesProps {
    is_public: boolean;
    entities: Entity[];
}

const Entities: FunctionComponent<EntitiesProps> = ({
    entities,
    is_public,
}) => {
    return (
        <div className="vstack space-y-4">
            {entities.map((entity) => (
                <Fragment key={entity.entity_id}>
                    {is_public ? (
                        <EntityItem key={entity.entity_id} entity={entity} />
                    ) : (
                        <EntityUpdate entity={entity} />
                    )}
                </Fragment>
            ))}
            {entities.length === 0 && (
                <div className="vstack justify-center items-center text-gray-600">
                    <div className="hstack justify-center items-center rounded-full bg-secondary p-4">
                        <CgSearch className="w-10 h-10" />
                    </div>
                    <p> No linked accounts </p>
                </div>
            )}
        </div>
    );
};
export default Entities;
