import { CompletedTodoList } from './components/CompletedTodoList';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {
    return (
        <div className="min-h-screen py-10 px-3 max-w-3xl m-auto">
            <h1 className="text-6xl font-thin mb-5 text-center text-[#cca1a7]">todos</h1>
            <TodoList />
            <CompletedTodoList />
        </div>
    )
}

export { App }