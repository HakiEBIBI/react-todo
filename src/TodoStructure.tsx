import React, {useState} from 'react';

export const TodoStructure = ({addTodo}: { addTodo: (todoAdd: string, duedate: string) => void }) => {
    const [inputValue, setInputValue] = useState('');
    const [dueDate, setDueDate] = useState('');

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const HandleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(e.target.value);
    };

    const newTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() && dueDate) {
            addTodo(inputValue, dueDate);
            setInputValue('');
            setDueDate('');
        }
    };

    return (
        <form onSubmit={newTodo}>
            <div className="all">
                <div className="AllInput">
                    <input
                        onChange={HandleInput}
                        value={inputValue}
                        placeholder="Enter a task"
                        required
                    />
                    <input
                        type="date"
                        onChange={HandleDateChange}
                        value={dueDate}
                        required
                    />
                    <button type="submit" className="ButtonTodo">
                        Add
                    </button>
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