import Navbar from "../../components/layout/Navbar";
import useEntities from "../../hooks/useEntities";
import Link from "next/link";
import Layout from "../../components/layout";
import Entities from "../../components/Entities";
import CustomHead from "../../components/Head";
import EntityAdd from "../../components/modals/EntityAdd";

const Profile = () => {
    const { data, isLoading } = useEntities();

    return (
        <Layout>
            <CustomHead title="Profile" />

            <Navbar />
            <div className="p-4 pt-16 h-full my-4">
                <div className="vstack container mx-auto max-w-md space-y-8">
                    <div className="hstack justify-between">
                        <p className="title">Your accounts </p>
                        <EntityAdd />
                    </div>

                    {!isLoading && (
                        <Entities entities={data} is_public={false} />
                    )}
                </div>
            </div>
        </Layout>
    );
};
export default Profile;
