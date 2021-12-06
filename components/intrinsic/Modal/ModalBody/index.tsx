import { FunctionComponent, useRef } from "react";
import useOutboundAction from "../../../../hooks/useOutboundClick";

export interface ModalBodyProps {}

const ModalBody: FunctionComponent<ModalBodyProps> = (props) => {
    return <div className="z-50 px-4 py-4">{props.children}</div>;
};

export default ModalBody;
