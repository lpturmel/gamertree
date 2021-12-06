import client from "../backend/db/client";
import { GetServerSideProps } from "next";
import { FunctionComponent } from "react";
import { getEntitiesByUserName } from "../backend/db/entities";
import { Entity } from "../types/Entity";
import Layout from "../components/layout";
import Entities from "../components/Entities";

export interface UserPageProps {
    entities?: Entity[];
}

const UserPage: FunctionComponent<UserPageProps> = ({ entities }) => {
    return (
        <Layout>
            <div className="vstack container pt-32 mx-auto max-w-sm space-y-8">
                <p className="text-center w-full font-semibold text-4xl">
                    {entities[0]?.public_username}
                </p>
                {entities.length === 0 ? (
                    <div> User not found</div>
                ) : (
                    <Entities entities={entities} is_public={true} />
                )}
            </div>
        </Layout>
    );
};
export default UserPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const username = context.params.slug;
    const userEntities = await getEntitiesByUserName(
        username as string,
        client
    );
    return {
        props: {
            entities: userEntities,
        }, // will be passed to the page component as props
    };
};
