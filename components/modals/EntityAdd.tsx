import { FunctionComponent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useNewEntity from "../../hooks/useNewEntity";
import Modal from "../../components/intrinsic/Modal";
import ModalContent from "../../components/intrinsic/Modal/ModalContent";
import ModalBody from "../../components/intrinsic/Modal/ModalBody";
import ModalHeader from "../../components/intrinsic/Modal/ModalHeader";
import ModalFooter from "../../components/intrinsic/Modal/ModalFooter";
import ModalOverlay from "../../components/intrinsic/Modal/ModalOverlay";
import GameForm from "../../components/GameForms";
import { FormState, resetState } from "../../atoms/GameForm/FormState";
import { useRouter } from "next/router";
import useEntityValidation from "../../hooks/useEntityValidation";

export interface EntityAddProps {}

const EntityAdd: FunctionComponent<EntityAddProps> = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useRecoilState(FormState);
    const newEntity = useNewEntity<any>(formState.entityType as any);
    const validation = useEntityValidation();

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => resetState(setFormState), 500);
    };
    useEffect(() => {
        if (newEntity.data) {
            closeModal();
        }
    }, [newEntity.data]);

    useEffect(() => {

        if (validation.data) {
            newEntity.mutate({
                account_name: validation.data.name,
                user_id: "",
                entity_id: "",
                region: formState.region,
                character_name: validation.data.name,
                game: formState.entityType,
                realm: formState.realm,
            });
        }
        }, [validation.data])

    const handleAdd = () => {
        validation.mutate({
            game: formState.entityType,
            summoner_name: formState.summoner_name,
            realm: formState.realm,
            region: formState.region as any,
            character_name: formState.character_name,
        });
    };

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
                                onClick={handleAdd}
                            >
                                <div className="flex flex-row justify-center items-center space-x-2">
                                    <p> Add </p>
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
