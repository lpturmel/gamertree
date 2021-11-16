import { FunctionComponent } from "react";
import Image from "next/image";

export interface LolChessProps {}

const LolChess: FunctionComponent<LolChessProps> = () => {
	return (
		<Image
			width="30px"
			height="30px"
			src="/lolchess.png"
			alt="Lolchess.gg"
			className="integration-icon"
		/>
	);
};

export default LolChess;
