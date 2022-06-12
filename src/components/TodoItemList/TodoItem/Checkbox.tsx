import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { completeTheTask, removeTask } from "../../../store/reducers/todoSlice";
import { addTask, showingCompletedList } from "../../../store/reducers/todosCompletedSlice";
import { useAppDispatch } from "../../../hooks/redux";

interface CheckboxProps {
    id: string;
    isCompleted: boolean,
    message: string
}

const Checkbox: React.FC<CheckboxProps> = ({id, isCompleted, message}) => {
    const [checkboxStatus, setCheckboxStatus] = useState(isCompleted);
    const dispatch = useAppDispatch();

    function completeCurrentTask (): void {
        dispatch(completeTheTask({id}))
        setCheckboxStatus(true);
        
        setTimeout(() => {
            dispatch(removeTask({id}));
            dispatch(addTask({message, id}));
            dispatch(showingCompletedList());
        }, 500)
        
    }
    
    return (
        <button
        className={
            `border-2 
            rounded-full  
            w-[20px] 
            h-[20px] 
            flex 
            justify-center 
            items-center
            disabled`   
        }   
            onClick={completeCurrentTask}
            disabled={checkboxStatus}
        >
            {isCompleted && <BsCheckLg fill="green"/>}
        </button>
    )
}

export { Checkbox }