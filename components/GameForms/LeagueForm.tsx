export interface LeagueFormProps {}

const LeagueForm: React.FunctionComponent<LeagueFormProps> = () => {
	return (
		<div className="flex flex-col">
			<label>Account name</label>
			<input placeholder="Account name..." />
			<label>Region</label>

			<input placeholder="Region..." />
		</div>
	);
};

export default LeagueForm;
