import { FunctionComponent, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import useNewEntity from "../../hooks/useNewEntity";
import Modal from "../../components/intrinsic/Modal";
import ModalContent from "../../components/intrinsic/Modal/ModalContent";
import ModalBody from "../../components/intrinsic/Modal/ModalBody";
import ModalHeader from "../../components/intrinsic/Modal/ModalHeader";
import ModalFooter from "../../components/intrinsic/Modal/ModalFooter";
import ModalOverlay from "../../components/intrinsic/Modal/ModalOverlay";
import GameForm from "../../components/GameForms";
import { FormState } from "../../atoms/GameForm/FormState";
import { Entity } from "../../types/Entity";

export interface EntityAddProps {}

const EntityAdd: FunctionComponent<EntityAddProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formState] = useRecoilState(FormState);
    const closeModal = () => setIsOpen(false);
    //    const newEntity = useNewEntity<Entity>(formState.entityType);

    const isActionButtonDisabled = () => {
        if (formState.entityType === "wow") {
            return (
                formState.region === "" ||
                formState.character_name === "" ||
                formState.realm === ""
            );
        } else {
            return formState.region === "" || formState.summoner_name === "";
        }
    };
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="btn-main text-xl"
            >
                New account
            </button>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent onClose={closeModal}>
                    <ModalHeader onClose={closeModal}>
                        {" "}
                        Add new account{" "}
                    </ModalHeader>
                    <ModalBody>
                        <GameForm entity={null} />
                    </ModalBody>
                    <ModalFooter>
                        <div className="hstack w-full justify-end space-x-8">
                            <button
                                className="hover:underline"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                disabled={isActionButtonDisabled()}
                                type="submit"
                                className="btn-main"
                            >
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <p> Add Character</p>
                                </div>
                            </button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default EntityAdd;
