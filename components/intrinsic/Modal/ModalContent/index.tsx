import { FunctionComponent, useRef } from "react";
import useOutboundAction from "../../../../hooks/useOutboundClick";

export interface ModalContentProps {
    onClose: Function;
}

const ModalContent: FunctionComponent<ModalContentProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    useOutboundAction(ref, () => props.onClose());
    return (
        <div
            ref={ref}
            className="relative rounded-md max-w-md m-auto w-full flex flex-col p-2 mt-16 mb-16 z-50 text-white bg-background"
        >
            {props.children}
        </div>
    );
};

export default ModalContent;
