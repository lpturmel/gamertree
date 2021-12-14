import { FunctionComponent } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
interface QnaIconProps {
    isExpanded: boolean;
}
const QnaIcon: FunctionComponent<QnaIconProps> = ({ isExpanded }) => {
    const rotate = isExpanded ? "rotate-180" : "rotate-0";
    return (
        <div className="rounded-full p-2 postion-relative">
            <MdOutlineKeyboardArrowDown
                className={`transition-transform duration-200 ${rotate}`}
            />
        </div>
    );
};
export default QnaIcon;
