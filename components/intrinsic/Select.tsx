import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import ArrowDown from "../icons/ArrowDown";

export interface SelectProps {
	elements: string[];
	placeholder?: string;
}

const Select: React.FunctionComponent<
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
				className="w-full placeholder-gray-500 bg-gray-700 hover:border-gray-600 h-10 pl-4 outline-none focus:ring-2 appearance-none border-[1px] rounded-md border-gray-700 transition-colors duration-200"
			>
				{placeholder && <option value={""}>{placeholder}</option>}
				{elements.map((element, index) => (
					<option key={index} value={element}>
						{element}
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
