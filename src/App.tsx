import './App.css';
import {TodoStructure} from "./TodoStructure.tsx";
import {TodoList} from "./TodoList.tsx";
import {useState, useEffect} from "react";
import {Todo} from "./TodoInterface.ts";
import {postTodoFetch} from "./PostTodo.ts";
import {GetTodoFetch} from "./GetTodoFetch.ts";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        GetTodoFetch().then(todos => setTodos(todos))
    }, []);

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
            <TodoStructure addTodo={todoAdd}/>
            <TodoList todoList={todos} deleteTodo={deleteFromList}/>
        </div>
    );
};

export default App;