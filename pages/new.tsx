import { useState } from "react";
import LeagueFrom from "../components/GameForms/LeagueForm";
import Select from "../components/intrinsic/Select";
import WowForm from "../components/GameForms/WowForm";
import Navbar from "../components/layout/Navbar";
import Layout from "../components/layout";
import CustomHead from "../components/Head";

const Add = () => {
	const [entityType, setEntityType] = useState(null);
	const entities = ["World of Warcraft", "League of Legends"];

	return (
		<Layout>
			<CustomHead title="Add a new account" />
			<Navbar />
			<div className="container mx-auto max-w-lg space-y-2 pt-8">
				<p className="text-2xl font-semibold">Add a new entity:</p>
				<div className="space-y-2">
					<p>Entity type</p>
					<Select
						placeholder="Select an entity"
						onChange={(e) => setEntityType(e.target.value)}
						elements={entities}
					/>
				</div>

				{entityType === "World of Warcraft" ? (
					<WowForm />
				) : (
					entityType === "League of Legends" && <LeagueFrom />
				)}
			</div>
		</Layout>
	);
};

export default Add;
