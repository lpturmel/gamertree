import { FunctionComponent } from "react";
import Image from "next/image";

export interface WarcraftLogsProps {}

const WarcraftLogs: FunctionComponent<WarcraftLogsProps> = () => {
	return (
		<Image
			width="30px"
			height="30px"
			src="/warcraftlogs.webp"
			alt="WarcraftLogs"
			className="integration-icon"
		/>
	);
};

export default WarcraftLogs;
