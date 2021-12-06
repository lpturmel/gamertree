import { FunctionComponent} from "react";
import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { SelectElement } from "../../types/SelectElement";
import ArrowDown from "../icons/ArrowDown";

export interface SelectProps {
    elements: SelectElement[];
    placeholder?: string;
}

const Select: FunctionComponent<
    SelectProps &
        DetailedHTMLProps<
            SelectHTMLAttributes<HTMLSelectElement>,
            HTMLSelectElement
        >
> = ({ elements, placeholder, ...props }) => {
    return (
        <div className="relative">
            <select
                {...props}
                className="w-full placeholder-gray-500 bg-secondary hover:border-gray-600 h-10 pl-4 outline-none focus:ring-2 appearance-none rounded-md border-gray-700 transition-colors duration-200"
            >
                {placeholder && <option value={""}>{placeholder}</option>}
                {elements.map((element, index) => (
                    <option key={index} value={element.value}>
                        {element.label}
                    </option>
                ))}
            </select>
            <div className="absolute right-2 top-3">
                <ArrowDown />
            </div>
        </div>
    );
};

export default Select;
