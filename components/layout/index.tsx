import { FunctionComponent } from "react";

const Layout: FunctionComponent = (props) => {
	return (
		<div className="relative w-full min-h-screen pt-4 bg-background text-white">
			{props.children}
		</div>
	);
};

export default Layout;
