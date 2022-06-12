import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { toggleShowingTodoList } from '../store/reducers/todoSlice';

import { TaskInput } from './DropdownMenu/TaskInput/TaskInput';
import { FooterTodoList } from './FootersTodoList/FooterTodoList';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { TodoItemList } from './TodoItemList/TodoItemList';

const TodoList: React.FC = () => {
    const isShowignTodoList = useAppSelector(state => state.tasks.isShowignList);
    const tasks = useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    function toggleTodoList () {
        dispatch(toggleShowingTodoList());
    }
    return (
        <>
            <DropdownMenu
                children={TaskInput}
                isShowignList={isShowignTodoList}
                toggleList={toggleTodoList}
            />
            <div className="max-w-4xl mt-[1px]">
                <TodoItemList isShowignList={isShowignTodoList} todoList={tasks} />
                <FooterTodoList listLength={tasks.length} />
            </div>
        </>
    )
}

export { TodoList }