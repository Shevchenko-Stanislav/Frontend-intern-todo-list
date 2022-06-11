import { useState } from "react";
import { removeAllExtraSpaces } from "../../helpers/removeAllExtraSpaces";
import { useAppDispatch } from "../../hooks/redux";
import { addTask, showingList } from "../../store/reducers/todoSlice";
import { generateId } from "../../helpers/idGenerator";


const TaskInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const dispatch = useAppDispatch();

    function addTaskOnKeyEnter (e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === "Enter") {
            addNewTask()
        }
    }

    function addNewTask () {
        const newString = removeAllExtraSpaces(inputValue);
        if (newString.length) {
            const itenId = generateId();
            dispatch(addTask({message: newString, id: itenId}));
            dispatch(showingList());
        }
        setInputValue("");
    }

    return (
        <input
            className="bg-white w-[100%] italic"
            placeholder="What needs to be done?"
            maxLength={50}
            value={inputValue} 
            onChange={(e) => {setInputValue(e.target.value)}}
            onKeyDown={addTaskOnKeyEnter}
        />
    )
}

export { TaskInput }