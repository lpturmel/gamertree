import { FunctionComponent } from "react";
import Image from "next/image";

export interface RaidBotsProps {}

const RaidBots: FunctionComponent<RaidBotsProps> = () => {
    return (
        <Image
            width="30px"
            height="30px"
            src="/raidbots.webp"
            alt="raidbots"
            className="integration-icon"
            priority={true}
        />
    );
};

export default RaidBots;
