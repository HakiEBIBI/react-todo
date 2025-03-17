import {Todo} from "./TodoInterface.ts";

export async function PatchTodoAPI(
    todo: Todo,
    isChecked: boolean,
    title: string,
    dueDate: string,
) {
    await fetch(`https://api.todos.in.jt-lab.ch/todos?id=eq.${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: isChecked, title: title, due_date: dueDate }),
    });
}