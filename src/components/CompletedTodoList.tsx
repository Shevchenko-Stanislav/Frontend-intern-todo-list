import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { toggleShowingCompletedList } from "../store/reducers/todosCompletedSlice";

import { MenuHeaderCompletedList } from './DropdownMenu/HeaderCompletedList/MenuHeaderCompletedList';
import { FooterCompletedList } from './FootersTodoList/FooterCompletedList';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { TodoItemList } from './TodoItemList/TodoItemList';

const CompletedTodoList: React.FC = () => {
    const isShowingCompletedList = useAppSelector(state => state.completedTasks.isShowignList);
    const completedTasks = useAppSelector(state => state.completedTasks.completedTasks);
    const dispatch = useAppDispatch();

    function toggleCompletedList () {
        dispatch(toggleShowingCompletedList());
    }
    return (
        <>
            <DropdownMenu 
                children={MenuHeaderCompletedList} 
                isShowignList={isShowingCompletedList} 
                toggleList={toggleCompletedList}
            />
            <div className="max-w-4xl mt-[1px]">
                <TodoItemList isShowignList={isShowingCompletedList} todoList={completedTasks}/>
                <FooterCompletedList />
            </div>
        </>
    )
}

export { CompletedTodoList }