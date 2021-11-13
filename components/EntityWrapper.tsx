import { FunctionComponent, useEffect } from "react";
import { useDeleteEntity } from "../hooks/useDeleteEntity";
import { Entity } from "../types/Entity";
import { CgClose } from "react-icons/cg";
import Icon from "./intrinsic/Icon";

export interface EntityWrapperProps {
	entity: Entity;
}

const EntityWrapper: FunctionComponent<EntityWrapperProps> = (props) => {
	const { data, mutate } = useDeleteEntity();

	const handleDelete = async () => {
		mutate({
			entity_id: props.entity.entity_id,
		});
	};

	useEffect(() => {
		if (data) {
			console.log(data);
		}
	}, [data]);
	return (
		<div className="relative flex flex-row rounded-md border-2 space-x-4 text-white border-gray-600 p-2 items-center justify-start min-h-[70px] text-lg">
			{props.children}
			<Icon
				onClick={handleDelete}
				className="absolute w-6 h-6 right-0 top-2 cursor-pointer"
				as={<CgClose />}
			/>
		</div>
	);
};

export default EntityWrapper;
