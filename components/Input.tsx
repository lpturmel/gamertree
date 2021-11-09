import { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input: React.FunctionComponent<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
	return (
		<div className="relative">
			<input
				{...props}
				className="w-full hover:border-gray-400 h-10 pl-4 outline-none focus:ring-2 focus:border-transparent appearance-none border-[1px] rounded-md border-gray-200 transition-colors duration-200"
			/>
		</div>
	);
};

export default Input;
