import { FunctionComponent } from "react";
import { CgInfo } from "react-icons/cg";
import Icon from "./intrinsic/Icon";
import Link from "next/link";

export interface UsernameBannerProps {}

const UsernameBanner: FunctionComponent<UsernameBannerProps> = () => {
    return (
        <div className="hstack py-2 bg-blue-500 items-center justify-center space-x-4 w-full px-8">
            <Icon as={<CgInfo className="w-6 h-6" />} />
            <div className="hstack space-x-2">
                <p>Your profile is currently private, to make it public</p>
                <Link href="/account/settings" passHref>
                    choose a username
                </Link>
            </div>
        </div>
    );
};
export default UsernameBanner;
