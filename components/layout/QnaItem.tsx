import { FunctionComponent, useState } from "react";
import QnaIcon from "../icons/QnaIcon";

export interface QnaItemProps {
    question: string;
    answer: string;
}

const QnaItem: FunctionComponent<QnaItemProps> = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <details className="shadow-md cursor-pointer bg-secondary rounded-md vstack justify-start items-center">
            <summary
                onClick={() => setIsExpanded(!isExpanded)}
                className="hstack justify-between items-center outline-none p-4 rounded-md focus:ring-2"
            >
                {" "}
                <p className="font-bold select-none">{question} </p>{" "}
                <QnaIcon isExpanded={isExpanded} />
            </summary>
            <p className="text-sm p-4"> {answer} </p>
        </details>
    );
};
export default QnaItem;
