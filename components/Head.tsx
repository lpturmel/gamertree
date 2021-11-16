import Head from "next/head";
import { FunctionComponent } from "react";
export interface CustomHeadProps {
	title?: string;
}

const CustomHead: FunctionComponent<CustomHeadProps> = ({ title }) => {
	return (
		<Head>
			<title> {title} - Gamer Tree </title>
			<meta charSet="UTF-8" />
			<meta
				name="description"
				content={
					"Gamer Tree is a platform for gamers to share their accounts"
				}
			/>
			<meta
				name="keywords"
				content="Gamer Tree, World of Warcraft, League of Legends, Teamfight Tactics, TFT, links, games, "
			/>
			<meta name="author" content="Louis-Philippe Turmel" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
		</Head>
	);
};

export default CustomHead;
