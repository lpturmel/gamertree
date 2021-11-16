import { FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavLinkProps {
	path: string;
	text: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ path, text }) => {
	const router = useRouter();
	const isActive = router.pathname === path;
	return (
		<div className="w-full relative">
			<Link href={path} passHref>
				<p className="nav-link">{text}</p>
			</Link>
			{isActive && (
				<div className="absolute -bottom-6 w-full border-b-2 border-primary" />
			)}
		</div>
	);
};

export default NavLink;
