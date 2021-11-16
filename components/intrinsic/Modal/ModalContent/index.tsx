import { FunctionComponent } from "react";

export interface ModalContentProps {}

const ModalContent: FunctionComponent<ModalContentProps> = (props) => {
	return (
		<div className="relative rounded-md max-w-md m-auto w-full flex flex-col p-2 mt-16 mb-16 z-50 text-white  bg-secondary">
			{props.children}
		</div>
	);
};

export default ModalContent;
