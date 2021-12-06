import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

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
        <RecoilRoot>
            <QueryClientProvider client={client}>
                <Component {...pageProps} />

                <div id="portal" />
            </QueryClientProvider>
            </RecoilRoot>
        </SessionProvider>
    );
}

export default MyApp;
