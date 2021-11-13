import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Navbar from "../components/layout/Navbar";
import useEntities from "../hooks/useEntities";
import Link from "next/link";
import Layout from "../components/layout";
import LeagueLogo from "../components/icons/LeagueLogo";
import WowLogo from "../components/icons/WowLogo";
import WowEntityItem from "../components/WowEntityItem";
import LeagueEntityItem from "../components/LeagueEntityItem";

export default withPageAuthRequired(function Profile() {
	const { user } = useUser();
	const { data, isLoading } = useEntities();

	return (
		<Layout>
			<Navbar />
			<div className="p-4 pt-16 h-full my-4">
				<div className="container mx-auto max-w-md flex flex-col space-y-8">
					<div className="flex flex-row justify-between">
						<p className="font-bold text-2xl">Your accounts </p>
						<Link href="/new">
							<a className="btn-main text-xl">New account</a>
						</Link>
					</div>

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
			</div>
		</Layout>
	);
});
