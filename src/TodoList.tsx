import {Todo} from "./TodoInterface.ts"
import {ListTodo} from "./ListTodo.tsx";


export const TodoList = ({todoList, deleteTodo}: {todoList: Todo[], deleteTodo: (todo: Todo) => void}) => {
    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>
                    {todoList.map((todo) => (<ListTodo todo={todo} deleteTodo={deleteTodo} date={todo.due_date} title={todo.title} key={todo.id}/>))}
                </ul>
            </div>
        </div>
    );
};