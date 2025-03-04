import './App.css';
import {TodoStructure} from "./AddTodo.tsx";
import {TodoList} from "./TodoList.tsx";


const App = () => {
    return (
        <div className="content">
            <h1>𝓜𝔂 𝓽𝓸𝓭𝓸 𝓛𝓲𝓼𝓽</h1>
            <TodoStructure/>
            <TodoList/>
        </div>
    );
};

export default App;

