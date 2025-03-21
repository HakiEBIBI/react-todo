import React, {useState} from 'react'

export const TodoStructure = ({addTodo, sorting, setError}: {
    addTodo: (todoAdd: string, duedate: string) => void,
    sorting: (sortType: string) => void,
    setError: (error: string | null) => void,
}) => {
    const [inputValue, setInputValue] = useState('')
    const [dueDate, setDueDate] = useState('')

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };

    const HandleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(e.target.value)
    };

    const newTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() && dueDate) {
            addTodo(inputValue, dueDate)
            setInputValue('')
            setDueDate('')
            setError(null)
        } else if (dueDate) {
            setError("please enter an input")
        } else {
            setError("please enter an due date")
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
                    />
                    <input
                        type="date"
                        onChange={HandleDateChange}
                        value={dueDate}
                    />
                    <button type="submit" className="ButtonTodo">
                        Add
                    </button>
                    <select onChange={(e) => sorting(e.target.value)}>
                        <option value={"name"}>Name</option>
                        <option value={"duedate"}>Duedate</option>
                        <option value={"done"}>Done</option>
                        <option value={"undone"}>Undone</option>
                    </select>
                </div>
            </div>
        </form>
    );
};