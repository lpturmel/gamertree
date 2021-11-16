import { FunctionComponent } from "react";

export interface ModalHeaderProps {}

const ModalHeader: FunctionComponent<ModalHeaderProps> = (props) => {
	return (
		<div className="flex flex-row justify-between px-4 py-4 text-xl font-semibold">
			{props.children}
		</div>
	);
};

export default ModalHeader;
