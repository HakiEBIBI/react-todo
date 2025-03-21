import './App.css';
import {TodoStructure} from "./TodoStructure.tsx";
import {TodoList} from "./TodoList.tsx";
import {useEffect} from "react";
import {GetTodoFetch} from "./GetTodoFetch.ts";
import {useAppStore} from "./useTodoStore.ts";
import {useShallow} from "zustand/react/shallow";

const App = () => {
    const {setTodos, error} = useAppStore(useShallow((state) => ({
        setTodos: state.setTodos,
        error: state.error,
    })));

    useEffect(() => {
        GetTodoFetch().then(todos => setTodos(todos))
    }, []);

    return (
        <div className="content">
            <h1>𝓜𝔂 𝓽𝓸𝓭𝓸 𝓛𝓲𝓼𝓽</h1>
            {error && <h3 className={"error"}>{error}</h3>}
            <TodoStructure/>
            <TodoList/>
        </div>
    );
};

export default App;