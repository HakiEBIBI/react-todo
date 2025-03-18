import './App.css';
import {TodoStructure} from "./TodoStructure.tsx";
import {TodoList} from "./TodoList.tsx";
import {useState, useEffect} from "react";
import {Todo} from "./TodoInterface.ts";
import {postTodoFetch} from "./PostTodo.ts";
import {GetTodoFetch} from "./GetTodoFetch.ts";

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [sort, setSort] = useState("name")
    const [error, setError] = useState<string | null>(null)

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
        sortedTodo = todos.filter((todo) => todo.done);
    } else if (sort === 'undone') {
        sortedTodo = todos.filter((todo) => !todo.done);
    } else {
        sortedTodo = [...todos];
    }

    const deleteFromList = (todo: Todo) => {
        try {
            setTodos((todos) => todos.filter((t) => t.id !== todo.id));
            setError(null)
        } catch (error) {
            setError("Failed to delete the task.");
        }
    };

    const todoAdd = async (todoAdd: string, duedate: string) => {
        console.log("salut");
        if (isNaN(new Date(duedate).getTime())) {
            setError("Please enter a valid date.");
            return;
        }

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
            {error && <h3 className={"error"}>{error}</h3>}
            <TodoStructure addTodo={todoAdd} sorting={changeSorting} setError={setError}/>
            <TodoList todoList={sortedTodo} deleteTodo={deleteFromList} setError={setError}/>
        </div>
    );
};

export default App;