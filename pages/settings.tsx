import { FunctionComponent } from "react";
import Layout from "../components/layout";
import Navbar from "../components/layout/Navbar";
export interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
	return (
		<Layout>
			<Navbar />
		</Layout>
	);
};

export default Settings;
