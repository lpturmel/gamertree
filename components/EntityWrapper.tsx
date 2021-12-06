import { FunctionComponent } from "react";
import { useDeleteEntity } from "../hooks/useDeleteEntity";
import { Entity } from "../types/Entity";
import { CgClose } from "react-icons/cg";
import Icon from "./intrinsic/Icon";
import ConfirmationModal from "./intrinsic/ConfirmationModal";

export interface EntityWrapperProps {
    entity: Entity;
}

const EntityWrapper: FunctionComponent<EntityWrapperProps> = (props) => {
    const { mutate } = useDeleteEntity();

    const handleDelete = async () => {
        mutate({
            entity_id: props.entity.entity_id,
        });
    };

    return (
        <div className="hstack relative shadow-md bg-secondary rounded-md  space-x-4 text-white  p-4 items-center justify-between min-h-[70px] text-lg">
            {props.children}
        </div>
    );
};

export default EntityWrapper;
