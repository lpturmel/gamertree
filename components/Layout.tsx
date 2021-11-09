import { FunctionComponent } from "react";

const Layout: FunctionComponent = (props) => {
	return <div className="w-full min-h-screen p-4">{props.children}</div>;
};

export default Layout;
