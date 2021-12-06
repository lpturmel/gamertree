import { FunctionComponent } from "react";
import Image from "next/image";

export interface UGgProps {}

const UGg: FunctionComponent<UGgProps> = () => {
    return (
        <Image
            width="30px"
            height="30px"
            src="/ugg.png"
            alt="UGg.gg"
            className="integration-icon rounded-full"
            priority={true}
        />
    );
};

export default UGg;
