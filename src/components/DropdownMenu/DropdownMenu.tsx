import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface IDropdownProps {
    children: React.FC,
    toggleList: () => void,
    isShowignList: boolean
}

const DropdownMenu: React.FC<IDropdownProps> = ({ children, toggleList, isShowignList }) => {

    const Children = children;

    return (
        <div className="min-w-full grid grid-cols-[48px_1fr] border-[1px] border-solid border-gray-200">
            <button 
                onClick={toggleList}
                className="bg-white w-[48px] h-14 flex justify-center items-center"
            >  
            {isShowignList 
                ? <RiArrowDropUpLine size={40} fill="gray"/>
                : <RiArrowDropDownLine size={40} fill="gray"/>   
            }
            </button>
            <Children />
        </div>
    )
}

export { DropdownMenu }