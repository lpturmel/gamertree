import { FunctionComponent, useState } from "react";
import Modal from "./Modal";
import ModalContent from "./Modal/ModalContent";
import ModalBody from "./Modal/ModalBody";
import ModalHeader from "./Modal/ModalHeader";
import ModalFooter from "./Modal/ModalFooter";
import ModalOverlay from "./Modal/ModalOverlay";

export interface ConfirmationModalProps {
    header: string;
    action: Function;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({
    header,
    action,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <button className="danger-icon" onClick={() => setIsOpen(true)}>
                {" "}
                Delete
            </button>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent onClose={closeModal}>
                    <ModalHeader onClose={closeModal}>{header}</ModalHeader>
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>
                        <div className="hstack w-full justify-end space-x-8">
                            <button
                                className="hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                No
                            </button>
                            <button
                                className="danger-icon"
                                onClick={() => action()}
                            >
                                Yes
                            </button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ConfirmationModal;
