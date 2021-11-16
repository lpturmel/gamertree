import { FunctionComponent, useState } from "react";
import Modal from "./Modal";
import ModalContent from "./Modal/ModalContent";
import ModalBody from "./Modal/ModalBody";
import ModalHeader from "./Modal/ModalHeader";
import ModalFooter from "./Modal/ModalFooter";
import ModalOverlay from "./Modal/ModalOverlay";
import { CgClose } from "react-icons/cg";
import Icon from "./Icon";

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
	return (
		<>
			<Icon
				onClick={() => setIsOpen(true)}
				className="absolute w-6 h-6 right-0 top-2 cursor-pointer"
				as={<CgClose />}
			/>
			<Modal isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{header}</ModalHeader>
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
