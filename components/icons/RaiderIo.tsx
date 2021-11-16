import { FunctionComponent } from "react";
import Image from "next/image";

export interface RaiderIoProps {}

const RaiderIo: FunctionComponent<RaiderIoProps> = () => {
	return (
		<Image
			width="30px"
			height="30px"
			src="/raiderio.png"
			alt="raiderio"
			className="integration-icon"
		/>
	);
};

export default RaiderIo;
