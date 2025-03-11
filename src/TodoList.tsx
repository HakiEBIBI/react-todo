import {Todo} from "./TodoInterface.ts";
import {DeleteTodoAPI} from "./DeleteTodoAPI.ts";

interface TodoListProps {
    todoList: Todo[];
    deleteTodo: (todo: Todo) => void;
}

export const TodoList = ({todoList, deleteTodo}: TodoListProps) => {
    const handleDelete = async (task: Todo) => {
        try {
            await DeleteTodoAPI(task)
            deleteTodo(task)
        } catch (error) {
            console.error("Erreur lors de la suppression de la tâche :", error);
        }
    };


    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>
                    {todoList.map((task: Todo, index: number) => (
                        <li key={index}>
                            <h4>{task.title}</h4>
                            <time>{task.due_date}</time>
                            <input type="checkbox" checked={task.done}/>
                            <button
                                className="button-li"
                                onClick={() => handleDelete(task)}
                            >
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR4nO2UUQoCMQxE44/n2CPoJfVSu1/iTfQIyxJmYCTohxSl1borSgPz0bTMS0pas0xI6kgOACaSuheuuSHOWG2EUQp4oL4KImkFYAwzd9+k++6+vXU2xtlXqj8WVF+qwzOI5pB9DbR4cKlO+PcgS/K5NRuI7erYhoHtHf3aMHCuTxXAuRYC4FQC2n8AtMuCJK0D9k5n0UlAwiM1vgDkL4qyLy3PRQAAAABJRU5ErkJggg=="
                                    alt="trash"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};