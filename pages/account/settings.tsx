import { FunctionComponent, useState, ChangeEvent, useEffect } from "react";
import { CgCheck, CgClose } from "react-icons/cg";
import CustomHead from "../../components/Head";
import Input from "../../components/intrinsic/Input";
import Spinner from "../../components/intrinsic/Spinner";
import Layout from "../../components/layout";
import Navbar from "../../components/layout/Navbar";
import useNewUsername from "../../hooks/useNewUsername";
import useUsernameAvailability from "../../hooks/useUsernameAvailability";
import useProfile from "../../hooks/useProfile";

export interface SettingsProps {}

const Settings: FunctionComponent<SettingsProps> = () => {
    const profile = useProfile();
    const { mutate } = useNewUsername();
    const [username, setUsername] = useState("");
    const userAvailability = useUsernameAvailability();

    const handleBlur = () => {
        if (username !== profile.data?.public_username && username !== "") {
            userAvailability.mutate(username);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleNameReservation = () => {
        mutate(username);
    };

    useEffect(() => {
        if (profile.data) {
            setUsername(profile.data?.public_username);
        }
    }, [profile.data]);

    return (
        <Layout>
            <CustomHead title="Settings" />

            <Navbar />

            {profile.isLoading ? (
                <Spinner />
            ) : (
                <div className="vstack container mx-auto max-w-sm space-y-4 pt-8">
                    <div className="vstack space-y-2">
                        <p className="title">User information</p>
                        <label> Public username </label>
                        <div className="relative">
                            <Input
                                value={username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="pl-36"
                            />
                            <p className="absolute top-2 left-4 font-bold text-white">
                                gamertree.com/
                            </p>

                            <div className="absolute flex justify-center items-center -right-8 top-2">
                                {userAvailability.isLoading ? (
                                    <Spinner />
                                ) : userAvailability.isError ? (
                                    <CgClose className="w-8 h-8 text-red-500" />
                                ) : (
                                    userAvailability.data && (
                                        <CgCheck className="w-8 h-8 text-green-500" />
                                    )
                                )}
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-end">
                            <button
                                disabled={
                                    username ===
                                        profile.data?.public_username ||
                                    userAvailability.isLoading ||
                                    userAvailability.isError
                                }
                                onClick={handleNameReservation}
                                className="btn-main"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="vstack space-y-2">
                        <p className="title"> Data removal </p>
                        <button className="danger-icon">Delete Account</button>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Settings;
