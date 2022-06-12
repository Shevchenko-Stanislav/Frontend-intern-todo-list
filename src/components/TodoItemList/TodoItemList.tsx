import { TodoItem } from "./TodoItem/TodoItem";
import { ITodoItem } from "../../types/types";

interface ITodoItemList {
    isShowignList: boolean,
    todoList: ITodoItem[]
}

const TodoItemList: React.FC<ITodoItemList> = ({ isShowignList, todoList }) => {

    const TodoList = todoList.map(item => <TodoItem key={item.id} {...item} />);
    return (
        <>
            {isShowignList &&
                <div>
                    {todoList.length
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
        </>
    )
}

export { TodoItemList }