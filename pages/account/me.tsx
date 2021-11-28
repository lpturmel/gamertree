import Navbar from "../../components/layout/Navbar";
import useEntities from "../../hooks/useEntities";
import Link from "next/link";
import Layout from "../../components/layout";
import Entities from "../../components/Entities";
import CustomHead from "../../components/Head";

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
                        <Link href="/account/new">
                            <a className="btn-main text-xl">New account</a>
                        </Link>
                    </div>

                    {!isLoading && <Entities entities={data} />}
                </div>
            </div>
        </Layout>
    );
};
export default Profile;
