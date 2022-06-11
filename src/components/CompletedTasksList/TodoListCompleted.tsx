import { TodoItem } from "../TodoItem/TodoItem";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { removeAllTask } from "../../store/reducers/todosCompletedSlice";

const TodoListCompleted: React.FC = () => {

    const isShowignTodoList = useAppSelector(state => state.completedTasks.isShowignList);
    const completedTasks = useAppSelector(state => state.completedTasks.completedTasks);
    const dispatch = useAppDispatch();
    const TodoList = completedTasks.map(item => <TodoItem key={item.id} {...item} />);

    function crearAll () {
        dispatch(removeAllTask());
    }

    return (
       <div className="mb-[65px]">
            {isShowignTodoList &&  
                <div>
                    {completedTasks.length
                        ? TodoList
                        : <div className="
                            text-2xl bg-white border-[1px] 
                            border-solid border-gray-200 
                            text-gray-400
                            italic
                            h-[70px]
                            flex
                            items-center 
                            justify-center">
                            No completed tasks
                        </div>
                    }
                </div>
            }
            {/* Как должны работать остальные кнопки? */}
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
       </div>
    )
}

export { TodoListCompleted }