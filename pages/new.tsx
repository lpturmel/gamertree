import { useState } from "react";
import LeagueFrom from "../components/GameForms/LeagueForm";
import Select from "../components/Select";
import WowForm from "../components/GameForms/WowForm";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Add = () => {
	const [entityType, setEntityType] = useState(null);
	const entities = ["World of Warcraft (WoW)", "League of Legends (LoL)"];

	return (
		<Layout>
			<Navbar />
			<div className="container mx-auto max-w-lg space-y-2">
				<p className="text-2xl font-semibold">Add a new entity:</p>
				<div className="space-y-2">
					<p>Entity type</p>
					<Select
						placeholder="Select an entity"
						onChange={(e) => setEntityType(e.target.value)}
						elements={entities}
					/>
				</div>

				{entityType === "World of Warcraft (WoW)" ? (
					<WowForm />
				) : (
					entityType === "League of Legends (LoL)" && <LeagueFrom />
				)}
			</div>
		</Layout>
	);
};

export default Add;
