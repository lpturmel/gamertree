import StaticNavbar from "../components/layout/StaticNavbar";
import Layout from "../components/layout";
import CustomHead from "../components/Head";
import QnaItem from "../components/layout/QnaItem";
import PricingCard from "../components/layout/PricingCard";

export default function Home() {
    return (
        <Layout>
            <CustomHead title="Home" />
            <StaticNavbar />
            <div className="container min-h-[80vh] mx-auto max-w-lg p-4">
                <p className="font-bold text-4xl">
                    {" "}
                    Share all your game accounts in one link{" "}
                </p>
            </div>

            <div className="container max-w-lg mx-auto min-h-[40vh] w-full">
                <div className="vstack space-y-4">
                    <p className="font-bold text-2xl w-full text-center">
                        {" "}
                        Frequently Asked Questions{" "}
                    </p>

                    <QnaItem
                        question="How is Gamertree different from Linktree?"
                        answer="Gamertree is not meant to replace/do what Linktree does. Linktree provides users with a way to embed links to social media platforms. Gamertree centralizes characters/accounts in one link while validating that each entry is a valid  entity in its own property."
                    />
                    <QnaItem
                        question="How much does a subscription cost?"
                        answer="It's free!"
                    />
                    <QnaItem
                        question="Why don't you charge a subscription fee?"
                        answer="The point of Gamertree is to provide gamers and content creators a link service for all their game accounts for free, it's a way for me to regive to the community. We have enough subscription to worry about, all you need for a gamertree account is a Discord or Google account."
                    />
                </div>
            </div>
            <div className="container max-w-lg mx-auto min-h-[40vh] w-full">
                <div className="vstack space-y-4 w-full justify-center items-center">
                    <p className="font-bold text-2xl w-full text-center">
                        {" "}
                        Pricing{" "}
                    </p>
                    <PricingCard
                        name="Account"
                        price={"Free"}
                        features={["Unlimited game connexions"]}
                    />
                </div>
            </div>
        </Layout>
    );
}
