import { FunctionComponent } from "react";
import Link from "next/link";
import { CgLogOut } from "react-icons/cg";
import useFetchProfile from "../../hooks/useFetchProfile";
import Dropdown from "../intrinsic/Dropdown";
import DropdownItem from "../intrinsic/Dropdown/DropdownItem";
import NavLink from "./NavLink";
import UsernameBanner from "../UsernameBanner";
import { signOut, useSession } from "next-auth/react";

export interface AppNavbarProps {}

const AppNavbar: FunctionComponent<AppNavbarProps> = () => {
    const { data: session } = useSession();
    const profile = useFetchProfile();
    return (
        <div className="vstack">
            {!profile.isLoading && !profile.data && <UsernameBanner />}
            <div className="flex pt-4 w-full justify-between items-center border-b border-secondary pb-4 px-8">
                <Link href="/" passHref>
                    <p className="font-bold text-2xl cursor-pointer text-white">
                        {" "}
                        Gamer Tree{" "}
                    </p>
                </Link>

                <div className="hstack space-x-16 items-center">
                    <div className="hstack space-x-8">
                        <NavLink path="/account/me" text="Accounts" />
                        <NavLink path="/account/settings" text="Settings" />
                    </div>
                    <div className="hstack justify-center items-center">
                        <Dropdown
                            button={
                                <img
                                    src={session?.user.image}
                                    className="w-10 h-10 rounded-full cursor-pointer hover:opacity-70"
                                />
                            }
                        >
                            <DropdownItem
                                onClick={() =>
                                    signOut({
                                        callbackUrl: "/",
                                    })
                                }
                                icon={<CgLogOut className="w-6 h-6" />}
                                text="Logout"
                            />
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNavbar;
