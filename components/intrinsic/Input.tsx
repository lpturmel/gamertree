import {
	DetailedHTMLProps,
	FunctionComponent,
	InputHTMLAttributes,
} from "react";

const Input: FunctionComponent<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, value, ...props }) => {
	return (
		<div className="relative">
			<input
				{...props}
                value={value}
				className={
					"w-full placeholder-text-hover bg-secondary hover:border-gray-600 h-10 px-4 outline-none focus:ring-2 focus:border-transparent appearance-none rounded-md border-gray-700 transition-colors duration-200 " +
					className
				}
			/>
		</div>
	);
};

export default Input;
