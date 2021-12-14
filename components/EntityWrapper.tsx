import { FunctionComponent } from "react";
import { useDeleteEntity } from "../hooks/useDeleteEntity";
import { Entity } from "../types/Entity";
import { motion } from "framer-motion";

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

    const variants = {
        hidden: { opacity: 0, x: 0, y: 10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 10 },
    };
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2, type: "easeInOut" }}
            className="hstack relative shadow-md bg-secondary rounded-md  space-x-4 text-white  p-4 items-center justify-between min-h-[70px] text-lg"
        >
            {props.children}
        </motion.div>
    );
};

export default EntityWrapper;
