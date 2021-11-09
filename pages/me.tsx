import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";
import useEntities from "../hooks/useEntities";
import Link from "next/link";
import Layout from "../components/Layout";
import LeagueLogo from "../components/LeagueLogo";
import WowLogo from "../components/WowLogo";
import WowEntityItem from "../components/WowEntityItem";
import LeagueEntityItem from "../components/LeagueEntityItem";

export default withPageAuthRequired(function Profile() {
	const { user } = useUser();
	const { data, isLoading } = useEntities();
	console.log(data);
	return (
		<Layout>
			<Navbar />
			<h1>Profile</h1>
			<p>{user?.email}</p>
			<p>Hello {user?.name}! here are your accounts:</p>

			<Link href="/new">
				<a className="font-bold bg-green-400 px-4 py-2 rounded-md text-white hover:cursor-pointer">
					New account
				</a>
			</Link>
			<div className="container mx-auto max-w-md flex flex-col space-y-4">
				{!isLoading &&
					data.map((entity) => (
						<div key={entity.entity_id}>
							{entity.game === "wow" ? (
								<WowEntityItem entity={entity} />
							) : (
								<LeagueEntityItem entity={entity} />
							)}
						</div>
					))}
			</div>
		</Layout>
	);
});
