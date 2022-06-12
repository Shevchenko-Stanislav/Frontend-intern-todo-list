import { useAppDispatch } from "../../hooks/redux";
import { removeAllTask } from "../../store/reducers/todosCompletedSlice";

const FooterCompletedList: React.FC = () => {

    const dispatch = useAppDispatch();
    function crearAll () {
        dispatch(removeAllTask());
    }
    /* Как должны работать остальные кнопки? */
    return(
        <div className="bg-white
                border-[1px] 
                border-solid 
                border-gray-200 
                h-[36px] 
                text-sm 
                flex 
                justify-between 
                items-center 
                text-gray-400
                px-4">
            <button onClick={crearAll}>Clear completed</button>
        </div>
    )
}

export { FooterCompletedList }