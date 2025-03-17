export async function PatchTodoAPI(patchTodo: {
    id: number;
    title: string;
    due_date: string;
    done: boolean
}): Promise<void> {
    await fetch(`https://api.todos.in.jt-lab.ch/todos?id=eq.${patchTodo.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: patchTodo.title,
            due_date: patchTodo.due_date,
            done: patchTodo.done
        })
    });
}