import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "next-auth/react";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={client}>
                <Component {...pageProps} />

                <ReactQueryDevtools initialIsOpen={false} />
                <div id="portal" />
            </QueryClientProvider>
        </SessionProvider>
    );
}

export default MyApp;
