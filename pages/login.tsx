import { Fragment, FunctionComponent } from "react";
import Layout from "../components/layout";
import {
    getProviders,
    LiteralUnion,
    ClientSafeProvider,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import Navbar from "../components/layout/Navbar";
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
            <Navbar />
            <div className="vstack container max-w-md mx-auto">
                <div>
                    <p className="text-4xl font-bold"> Sign in </p>
                </div>
                {Object.values(providers).map((provider) => (
                    <Fragment key={provider.id}>
                        <ProviderItem provider={provider} />
                    </Fragment>
                ))}
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
