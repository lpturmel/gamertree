import { useUser } from "@auth0/nextjs-auth0";
import { FunctionComponent } from "react"
import Link from "next/link";
import { CgLogOut, CgProfile } from "react-icons/cg";
import useProfile from "../../hooks/useProfile";
import Dropdown from "../intrinsic/Dropdown";
import DropdownItem from "../intrinsic/Dropdown/DropdownItem";
import NavLink from "./NavLink";
import UsernameBanner from "../UsernameBanner";

export interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
	const { user, error, isLoading } = useUser();
    const profile = useProfile();
    
	return (
    <div className="vstack">
    { !profile.isLoading &&  !profile.data && <UsernameBanner /> }
		<div className="flex pt-4 w-full justify-between items-center border-b border-secondary pb-4 px-8">
			<Link href="/" passHref>
				<p className="font-bold text-2xl cursor-pointer text-white">
					{" "}
					Gamer Tree{" "}
				</p>
			</Link>

			<div className="hstack space-x-16 items-center">
				<div className="hstack space-x-8">
					<NavLink path="/me" text="Accounts" />
					<NavLink path="/settings" text="Settings" />
				</div>

				<div className="hstack justify-center items-center">
					{!isLoading && (
						<Dropdown
							button={
								<img
									src={user.picture}
									alt="user profile"
									className="w-10 h-10 rounded-full cursor-pointer hover:opacity-70"
								/>
							}
						>
							<DropdownItem
								icon={<CgLogOut className="w-6 h-6" />}
								text="Logout"
								path="/api/auth/logout"
							/>
						</Dropdown>
					)}
				</div>
			</div>
		</div>
        </div>
	);
};

export default Navbar;
