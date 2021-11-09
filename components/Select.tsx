import {
	ChangeEventHandler,
	DetailedHTMLProps,
	SelectHTMLAttributes,
} from "react";
import ArrowDown from "./ArrowDown";

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
				className="w-full hover:border-gray-400 h-10 pl-4 outline-none focus:ring-2 appearance-none border-[1px] rounded-md border-gray-200 transition-colors duration-200"
			>
				{placeholder && <option value={null}>{placeholder}</option>}
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
