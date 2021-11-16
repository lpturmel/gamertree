import { UserProvider } from "@auth0/nextjs-auth0";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient({
        
   defaultOptions: {
       queries: {
           retry: false
       }
   }
});

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<QueryClientProvider client={client}>
				<Component {...pageProps} />

                <ReactQueryDevtools initialIsOpen={false} />
				<div id="portal" />
			</QueryClientProvider>
		</UserProvider>
	);
}

export default MyApp;
