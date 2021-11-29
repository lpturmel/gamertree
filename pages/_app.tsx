import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <QueryClientProvider client={client}>
                <Component {...pageProps} />

                <div id="portal" />
            </QueryClientProvider>
        </SessionProvider>
    );
}

export default MyApp;
