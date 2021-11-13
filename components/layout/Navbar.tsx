import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import NavLink from "./NavLink";

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const { user, error, isLoading } = useUser();

	return (
		<div className="flex w-full justify-between items-center border-b border-gray-600 pb-4 px-4">
			<Link href="/" passHref>
				<p className="font-bold text-2xl cursor-pointer text-white">
					{" "}
					Gamer Tree{" "}
				</p>
			</Link>

			<div className="flex flex-row space-x-16 items-center">
				<div className="flex flex-row space-x-8">
					<NavLink path="/me" text="Accounts" />
					<NavLink path="/settings" text="Settings" />
				</div>
				<div>
					{!isLoading && (
						<div className="flex flex-row justify-center items-center space-x-4">
							<img
								src={user.picture}
								alt="user profile"
								className="w-10 h-10 rounded-full"
							/>
							<Link href="/me" passHref>
								<p className="text-lg font-semibold">
									{user.name}
								</p>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
