import { ITodoItem } from "../../types/types";
import { Checkbox } from "./Checkbox";


const TodoItem: React.FC<ITodoItem> = (props) => {
    return(
        <div className="
            border-[1px] 
            border-solid border-gray-200 
            bg-white 
            grid grid-cols-[48px_1fr] 
            h-[70px] 
            px-3 
            min-w-[250px]">

            <div className="flex justify-center items-center">
                <Checkbox id={props.id} isCompleted={props.isCompleted} message={props.message} />
            </div>
            {props.isCompleted
            ?
                <s className="text-gray-400 overflow-auto flex content-center flex-wrap">
                    <div className="text-gray-400 overflow-auto">
                        {props.message}
                    </div>
                </s>
            : 
                <div className="overflow-auto flex content-center flex-wrap">
                    {props.message}
                </div>}
        </div>
    )
}

export { TodoItem }