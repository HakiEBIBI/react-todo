import {Todo} from "./TodoInterface.ts";

export async function DeleteTodoAPI(deletedTodo: Todo): Promise<void> {
    await fetch(`https://api.todos.in.jt-lab.ch/todos?id=eq.${deletedTodo.id}`, {
        method: 'DELETE',
    })
}