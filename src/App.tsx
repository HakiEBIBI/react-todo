import './App.css';
import {TodoStructure} from "./TodoStructure.tsx";
import {TodoList} from "./TodoList.tsx";
import {useState, useEffect} from "react";
import {Todo} from "./TodoInterface.ts";
import {postTodoFetch} from "./PostTodo.ts";
import {GetTodoFetch} from "./GetTodoFetch.ts";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [sort, setSort] = useState("name")

    let sortedTodo: Todo[]

    useEffect(() => {
        GetTodoFetch().then(todos => setTodos(todos))
    }, []);

    const changeSorting = (sortType: string) => {
        setSort(sortType);
    };

    if (sort === 'due-date') {
        sortedTodo = [...todos].sort((a, b) => {
            return new Date(b.due_date).getTime() - new Date(a.due_date).getTime();
        });
    } else if (sort === 'name') {
        sortedTodo = [...todos].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'done') {
        sortedTodo = [...todos].sort((a, b) => (b.done > a.done ? 1 : -1));
        sortedTodo = sortedTodo.filter((todo) => todo.done);
    } else if (sort === 'undone') {
        sortedTodo = [...todos].sort((a, b) => (a.done > b.done ? 1 : -1));
        sortedTodo = sortedTodo.filter((todo) => !todo.done);
    } else {
        sortedTodo = [...todos];
    }

    const deleteFromList = (todo: Todo) => {
        setTodos((todos) => todos.filter((t) => t.id !== todo.id))
    };

    const todoAdd = async (todoAdd: string, duedate: string) => {
        const newTodo: { title: string; due_date: string } = {title: todoAdd, due_date: duedate}
        try {
            const createdTodo = await postTodoFetch(newTodo)
            setTodos([...todos, createdTodo])
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <div className="content">
            <h1>𝓜𝔂 𝓽𝓸𝓭𝓸 𝓛𝓲𝓼𝓽</h1>
            <TodoStructure addTodo={todoAdd} sorting={changeSorting}/>
            <TodoList todoList={sortedTodo} deleteTodo={deleteFromList}/>
        </div>
    );
};

export default App;