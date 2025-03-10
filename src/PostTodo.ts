import {Todo} from "./TodoInterface.ts";

export async function postTodoFetch(postTodo: { title: string; due_date: string }): Promise<Todo> {

    const response = await fetch('https://api.todos.in.jt-lab.ch/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Prefer: "return=representation",
            Accept: "application/vnd.pgrst.object+json"
        },
        body: JSON.stringify(postTodo),
    });

    return await response.json();

}