import { FunctionComponent } from "react";
import Link from "next/link";

export interface StaticNavbarProps {}

const StaticNavbar: FunctionComponent<StaticNavbarProps> = () => {
    return (
        <div className="vstack">
            <div className="flex pt-4 w-full justify-between items-center border-b border-secondary pb-4 px-8">
                <Link href="/" passHref>
                    <p className="font-bold text-2xl cursor-pointer text-white">
                        {" "}
                        Gamer Tree{" "}
                    </p>
                </Link>

                <Link href="/api/auth/signin">
                    <button className="btn-main">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default StaticNavbar;
