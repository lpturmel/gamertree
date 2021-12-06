import { useEffect } from "react";

const useEscapeBinding = (onClose: Function) => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);
    return null;
};
export default useEscapeBinding;
