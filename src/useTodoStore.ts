import { create } from "zustand";
import { Todo } from "./TodoInterface.ts";

type TodoStore = {
    todos: Todo[],
    sort: string,
    error: string | null,
    setSort: (sort: string) => void,
    setError: (error: string | null) => void,
    deleteTodos: (id: number) => void,
    addTodo: (todo: Todo) => void,
    setTodos: (newTodo: Todo[]) => void,
};

export const useAppStore = create<TodoStore>((set) => ({
    todos: [],
    sort: "name",
    error: null,
    setSort: (sort) => set({ sort }),
    setError: (error) => set({error}),
    deleteTodos: (id) => {
        set((state) => ({
            todos: state.todos.filter((t) => t.id !== id),
        }));
    },
    addTodo: (todo) => {
        set((state) => ({ todos: [...state.todos, todo] }));
    },
    setTodos: (newTodo) => {
        set(() => ({ todos: [...newTodo] }));
    },
}));