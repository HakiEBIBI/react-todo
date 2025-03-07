import './App.css';
import {TodoStructure} from "./TodoStructure.tsx";
import {TodoList} from "./TodoList.tsx";
import {useState} from "react";


const App = () => {
    const [list, setList] = useState<string[]>([])
    const todoAdd = (todoAdd: string) => {
        setList([...list, todoAdd])
    }
    return (
        <div className="content">
            <h1>𝓜𝔂 𝓽𝓸𝓭𝓸 𝓛𝓲𝓼𝓽</h1>
            <TodoStructure addTodo={todoAdd}/>
            <TodoList todoList={list}/>
        </div>
    );
};

export default App;

