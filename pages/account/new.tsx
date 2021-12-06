import Navbar from "../../components/layout/Navbar";
import Layout from "../../components/layout";
import CustomHead from "../../components/Head";
import GameForm from "../../components/GameForms";

const Add = () => {
    return (
        <Layout>
            <CustomHead title="Add a new account" />
            <Navbar />

            <p className="text-2xl font-semibold">Add a new entity:</p>
            <GameForm entity={null} />
        </Layout>
    );
};

export default Add;
