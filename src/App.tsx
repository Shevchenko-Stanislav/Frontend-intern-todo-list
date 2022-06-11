import { TodoList } from './components/TodoList';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu';
import { TaskInput } from './components/TaskInput/TaskInput';
import { MenuHeaderCompletedList } from "./components/CompletedTasksList/MenuHeaderCompletedList";
import { TodoListCompleted } from "./components/CompletedTasksList/TodoListCompleted";
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { toggleShowingTodoList } from './store/reducers/todoSlice';
import { toggleShowingCompletedList } from "./store/reducers/todosCompletedSlice";

const App: React.FC = () => {

    const isShowignTodoList = useAppSelector(state => state.tasks.isShowignList);
    const isShowingCompletedList = useAppSelector(state => state.completedTasks.isShowignList)
    const dispatch = useAppDispatch();

    function toggleTodoList () {
        dispatch(toggleShowingTodoList());
    }

    function toggleCompletedList () {
        dispatch(toggleShowingCompletedList());
    }

    return (
        <div className="min-h-screen py-10 px-3 max-w-3xl m-auto">
            <h1 className="text-6xl font-thin mb-5 text-center text-[#cca1a7]">todos</h1>
            <DropdownMenu 
                children={TaskInput} 
                isShowignList={isShowignTodoList} 
                toggleList={toggleTodoList}
            />
            <div className="max-w-4xl mt-[1px]">
                <TodoList />
            </div>
            <DropdownMenu 
                children={MenuHeaderCompletedList} 
                isShowignList={isShowingCompletedList} 
                toggleList={toggleCompletedList}
            />
            <div className="max-w-4xl mt-[1px]">
                <TodoListCompleted />
            </div>
        </div>
    )
}

export { App }