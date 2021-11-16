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
		<div className="hstack relative shadow-md bg-secondary rounded-md  space-x-4 text-white  p-2 items-center justify-start min-h-[70px] text-lg">
			{props.children}
			<Icon
				onClick={handleDelete}
				className="absolute w-6 h-6 right-0 top-2 cursor-pointer"
				as={<CgClose />}
			/>
			<ConfirmationModal header={`Remove account`} action={handleDelete}>
				<div className="hstack space-x-2">
					<p>Are you sure you want to delete</p>
					<p className="font-bold">
						{props.entity.game === "lol"
							? props.entity.account_name
							: props.entity.character_name}
					</p>
					<p>?</p>
				</div>
			</ConfirmationModal>
		</div>
	);
};

export default EntityWrapper;
