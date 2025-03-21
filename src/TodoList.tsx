import {ListTodo} from "./ListTodo.tsx";
import {useAppStore} from "./useTodoStore.ts";
import {Todo} from "./TodoInterface.ts";
import {useShallow} from "zustand/react/shallow";


export const TodoList = () => {
    const {setError, deleteTodo, todoList, sort} = useAppStore(useShallow((state) => ({
        deleteTodo: state.deleteTodos,
        setError: state.setError,
        todoList: state.todos,
        sort: state.sort,
    })));

    const deleteFromList = (todo: Todo) => {
        try {
            deleteTodo(todo.id)
            setError(null)
        } catch (error) {
            setError("Failed to delete the task.");
        }
    };

    let sortedTodo = [...todoList]
    if (sort === 'due-date') {
        sortedTodo.sort((a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime())
    } else if (sort === 'name') {
        sortedTodo.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === 'done') {
        sortedTodo = todoList.filter((todo) => todo.done)
    } else if (sort === 'undone') {
        sortedTodo = todoList.filter((todo) => !todo.done)
    }

    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>

                    {sortedTodo.map((todo) => (
                        <ListTodo todo={todo} deleteTodo={deleteFromList} date={todo.due_date} title={todo.title}
                                  key={todo.id} setError={setError}/>))}
                </ul>
            </div>
        </div>
    );
};