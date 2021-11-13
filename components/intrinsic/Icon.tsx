import {
	DetailedHTMLProps,
	FunctionComponent,
	HTMLAttributes,
	ReactNode,
} from "react";

export interface IconProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	as: ReactNode;
	className?: string;
}

const Icon: FunctionComponent<IconProps> = ({ as, className, ...props }) => {
	return (
		<div {...props} className={className}>
			{as}
		</div>
	);
};

export default Icon;
