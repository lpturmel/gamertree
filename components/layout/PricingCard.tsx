import { FunctionComponent } from "react";
import Link from "next/link";

export interface PricingCardProps {
    price: string;
    name: string;
    features: string[]
}

const PricingCard: FunctionComponent<PricingCardProps> = ({ price, name, features }) => {
    return ( 
        <div className="vstack max-w-[270px] h-64 justify-between space-y-4 rounded-md bg-secondary p-8">
            <p className="font-bold text-xl w-full text-center"> {name} </p>
            <p className="font-semibold text-3xl w-full text-center"> {price} </p>

            <div className="vstack space-y-2">
                {
                    features.map((item, index) => (
                        <div key={index}>
                            <p> {item} </p>
                        </div>
                     ))
                }
            </div>

            <Link href="/api/auth/login">

                <button className="btn-main"> Get Started </button>
            </Link>
        </div>
    )
}
export default PricingCard;
