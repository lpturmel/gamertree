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
import { FormState, resetState } from "../../atoms/GameForm/FormState";
import { useRecoilState } from "recoil";

export interface EntityUpdateModalProps {
    entity: Entity;
}

const EntityUpdateModal: FunctionComponent<EntityUpdateModalProps> = ({
    entity,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useRecoilState(FormState);
    const { mutate } = useDeleteEntity();

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => resetState(setFormState), 500);
    };
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
    //useEscapeBinding(closeModal);
    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
                <EntityItem entity={entity} />
            </div>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent onClose={closeModal}>
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
