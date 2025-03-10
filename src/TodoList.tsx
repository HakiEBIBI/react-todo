import {Todo} from "./TodoInterface.ts";

interface TodoListProps {
    todoList: Todo[];
}

export const TodoList = ({todoList}: TodoListProps) => {
    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>
                    {todoList.map((task: Todo, index: number) => (
                        <li key={index}>
                            <h4>{task.title}</h4>
                            <time>{task.due_date}</time>
                            <input type="checkbox" checked={task.done}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};