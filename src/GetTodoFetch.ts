import {Todo} from "./TodoInterface.ts";

export async function GetTodoFetch() {
    const response = await fetch('https://api.todos.in.jt-lab.ch/todos', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        },
    })
    return (await response.json()) as Todo[]
}