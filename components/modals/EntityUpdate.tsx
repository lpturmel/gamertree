import { FunctionComponent, useState } from "react";
import { useDeleteEntity } from "../../hooks/useDeleteEntity";
import ConfirmationModal from "../../components/intrinsic/ConfirmationModal";
import Modal from "../../components/intrinsic/Modal";
import ModalContent from "../../components/intrinsic/Modal/ModalContent";
import ModalBody from "../../components/intrinsic/Modal/ModalBody";
import ModalHeader from "../../components/intrinsic/Modal/ModalHeader";
import ModalFooter from "../../components/intrinsic/Modal/ModalFooter";
import ModalOverlay from "../../components/intrinsic/Modal/ModalOverlay";
import GameForm from "../../components/GameForms";
import { Entity } from "../../types/Entity";
import EntityItem from "../EntityItem";
import useEscapeBinding from "../../hooks/useEscBinding";

export interface EntityUpdateModalProps {
    entity: Entity;
}

const EntityUpdateModal: FunctionComponent<EntityUpdateModalProps> = ({
    entity,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { mutate } = useDeleteEntity();

    const closeModal = () => setIsOpen(false);
    const universal_name =
        entity.game === "lol" ? entity.account_name : entity.character_name;

    const handleDelete = () => {
        mutate({
            entity_id: entity.entity_id,
        });
    };

    const handleUpdate = () => {
        //TODO
        console.log("Update!");
    };
    useEscapeBinding(closeModal);
    return (
        <>
            <div onClick={() => setIsOpen(true)}>
                <EntityItem entity={entity} />
            </div>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader onClose={closeModal}> Update </ModalHeader>
                    <ModalBody>
                        <GameForm entity={entity} />
                    </ModalBody>
                    <ModalFooter>
                        <div className="hstack w-full justify-between">
                            <ConfirmationModal
                                header={`Remove account`}
                                action={handleDelete}
                            >
                                <div className="hstack space-x-2">
                                    <p>Are you sure you want to delete</p>
                                    <p className="font-bold">
                                        {universal_name}
                                    </p>
                                    <p>?</p>
                                </div>
                            </ConfirmationModal>
                            <div className="hstack w-full justify-end space-x-8">
                                <button
                                    className="hover:underline"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn-main"
                                    onClick={handleUpdate}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EntityUpdateModal;
