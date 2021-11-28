import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

export interface DropdownItemProps {
    icon?: ReactNode;
    text: string;
    path?: string;
    onClick?: () => void;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({
    icon,
    text,
    path,
    onClick,
}) => {
    return (
        <>
            {path ? (
                <Link href={path} passHref>
                    <div
                        onClick={onClick}
                        className="hstack font-semibold hover:text-primary transition-colors duration-200 cursor-pointer p-2 justify-start space-x-4  items-center "
                    >
                        {icon && icon}
                        <p>{text}</p>
                    </div>
                </Link>
            ) : (
                <div
                    onClick={onClick}
                    className="hstack font-semibold hover:text-primary transition-colors duration-200 cursor-pointer p-2 justify-start space-x-4  items-center "
                >
                    {icon && icon}
                    <p>{text}</p>
                </div>
            )}
        </>
    );
};

export default DropdownItem;
