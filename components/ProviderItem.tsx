import { FunctionComponent } from "react";
import Image from "next/image";
import { ClientSafeProvider, signIn } from "next-auth/react";
export interface ProviderItemProps {
    provider: ClientSafeProvider;
}

const ProviderItem: FunctionComponent<ProviderItemProps> = ({ provider }) => {
    const handleProviderSignIn = () =>
        signIn(provider.id, { callbackUrl: "/" });
    return (
        <button
            onClick={handleProviderSignIn}
            className="hstack justify-center items-center space-x-4 p-4 bg-secondary rounded-md"
        >
            <Image
                width="35px"
                height="35px"
                src={`/providers/${provider.name.toLowerCase()}.webp`}
                priority={true}
            />
            <p className="font-bold"> Sign In with {provider.name}</p>
        </button>
    );
};
export default ProviderItem;
