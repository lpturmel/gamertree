import { Fragment, FunctionComponent } from "react";
import Layout from "../components/layout";
import {
    getProviders,
    LiteralUnion,
    ClientSafeProvider,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import StaticNavbar from "../components/layout/StaticNavbar";
import ProviderItem from "../components/ProviderItem";

export interface LoginProps {
    providers: Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    >;
}
const Login: FunctionComponent<LoginProps> = ({ providers }) => {
    return (
        <Layout>
            <StaticNavbar />
            <div className="vstack container pt-32 max-w-md mx-auto p-2 space-y-4">
                <div>
                    <p className="text-4xl font-bold"> Sign in </p>
                </div>

                <div className="vstack justify-center px-8 w-full space-y-4">
                    {Object.values(providers).map((provider) => (
                        <Fragment key={provider.id}>
                            <ProviderItem provider={provider} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
    const providers = await getProviders();
    return {
        props: {
            providers,
        }, // will be passed to the page component as props
    };
};
