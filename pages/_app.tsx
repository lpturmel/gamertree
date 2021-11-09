import { UserProvider } from "@auth0/nextjs-auth0";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<QueryClientProvider client={client}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</UserProvider>
	);
}

export default MyApp;
