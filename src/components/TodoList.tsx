import { TodoItem } from "./TodoItem/TodoItem";
import { useAppSelector } from "../hooks/redux";

const TodoList: React.FC = () => {

    const isShowignTodoList = useAppSelector(state => state.tasks.isShowignList);
    const tasks = useAppSelector(state => state.tasks.tasks);
    const TodoList = tasks.map(item => <TodoItem key={item.id} {...item} />);
    return (
       <div className="mb-[65px]">
            {isShowignTodoList &&  
                <div>
                    {tasks.length
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
                            There are no tasks yet
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
                {tasks.length} items left
            </div>
       </div>
    )
}

export {TodoList}