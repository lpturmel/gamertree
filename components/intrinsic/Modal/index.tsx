import { FunctionComponent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
    isOpen: boolean;
}

const Modal: FunctionComponent<ModalProps> = (props) => {
    const [client, setClient] = useState(false);

    useEffect(() => {
        if (navigator) {
            setClient(true);
        }
    }, []);

    if (props.isOpen && client) {
        return createPortal(
            <div className="overflow-auto justify-start items-center fixed h-screen w-screen top-0 left-0 z-50">
                {props.children}
            </div>,
            document.getElementById("portal")
        );
    }

    return null;
};

export default Modal;
