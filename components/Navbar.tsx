import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
	const { user, error, isLoading } = useUser();

	return (
		<div className="flex w-full justify-between">
			<p className="font-bold"> Gamer Tree </p>

			{!isLoading && (
				<div className="flex flex-row justify-center items-center space-x-4">
					<img src={user.picture} className="w-8 h-8 rounded-full" />
					<Link href="/me">{user.name}</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
