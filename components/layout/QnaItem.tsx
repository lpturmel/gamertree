import { FunctionComponent } from "react";

export interface QnaItemProps {
    question: string;
    answer: string;
}

const QnaItem: FunctionComponent<QnaItemProps> = ({ question, answer }) => {
    return ( 
       <details className="shadow-md cursor-pointer bg-secondary rounded-md vstack p-4 justify-start items-center">
            <summary> <p className="font-bold">{question} </p> </summary>
            <p className="pt-4"> {answer} </p>
       </details>
    )
}
export default QnaItem;
