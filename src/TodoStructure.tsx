import React, {useState} from 'react';

export const TodoStructure = ({addTodo}: { addTodo: (todoAdd: string) => void }) => {

    const [inputValue, setInputValue] = useState('');
    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const newTodo = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(inputValue)
        setInputValue('');
    }
    return (
        <form onSubmit={newTodo}>
            <div className="all">
                <div className="AllInput">
                    <input onChange={HandleInput} value={inputValue}/>
                    <button type="button" className="ButtonTodo">
                        Add
                    </button>
                    <input type="date"/>
                    <select>
                        <option>Sort</option>
                        <option>Duedate</option>
                        <option>Name</option>
                        <option>Done</option>
                        <option>Undone</option>
                    </select>
                </div>
            </div>
        </form>
    );
};