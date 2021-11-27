import { FunctionComponent } from "react";
import Image from "next/image";

export interface OpGgProps {}

const OpGg: FunctionComponent<OpGgProps> = () => {
    return (
        <Image
            width="30px"
            height="30px"
            src="/opgg.jpeg"
            alt="Op.gg"
            className="integration-icon rounded-full"
            priority={true}
        />
    );
};

export default OpGg;
