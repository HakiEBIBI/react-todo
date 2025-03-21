import React, {useState} from "react";
import {Todo} from "./TodoInterface.ts";
import {DeleteTodoAPI} from "./DeleteTodoAPI.ts";
import {PatchTodoAPI} from "./PatchTodoAPI.ts";

export const ListTodo = (
    {
        title,
        date,
        deleteTodo,
        todo,
        setError,
    }: {
        title: string,
        date: string,
        deleteTodo: (todo: Todo) => void,
        todo: Todo,
        setError: (error: string | null) => void,
    }
) => {
    const [inputValue, setInputValue] = useState(title)
    const [dueDate, setDueDate] = useState(date)
    const [checkbox, setCheckbox] = useState<boolean>(false)

    const handleInputBlur = async () => {
        try {
            const updatedTodo = {
                ...todo,
                title: inputValue
            };
            await PatchTodoAPI(updatedTodo)
            setError(null)
        } catch (error) {
            setError("Failed to update the task title.");
        }
    };

    const handleDateBlur = async () => {
        try {
            const updatedTodo = {
                ...todo,
                due_date: dueDate
            };
            await PatchTodoAPI(updatedTodo)
            setError(null)
        } catch (error) {
            setError("Failed to update the task date.");
        }
    };

    const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setCheckbox(isChecked)

        try {
            const updatedTodo = {
                ...todo,
                done: isChecked
            };
            await PatchTodoAPI(updatedTodo)
            setError(null)
        } catch (error) {
            setError("Failed to update the task checkbox.");
        }
    };

    const handleDelete = async () => {
        try {
            await DeleteTodoAPI(todo)
            deleteTodo(todo)
            setError(null)
        } catch (error) {
            setError("Failed to update the task checkbox.");
        }
    };

    return (
        <>
            <li>
                <input className={"li-input"} value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                       onBlur={handleInputBlur}></input>
                <input type={"date"} value={dueDate} className={"li-date"} onChange={(e) => setDueDate(e.target.value)}
                       onBlur={handleDateBlur}></input>
                <input type="checkbox" checked={checkbox} onChange={handleCheckboxChange}/>
                <button
                    className="button-li"
                    onClick={() => handleDelete()}
                >
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoElEQVR4nO2UUQoCMQxE44/n2CPoJfVSu1/iTfQIyxJmYCTohxSl1borSgPz0bTMS0pas0xI6kgOACaSuheuuSHOWG2EUQp4oL4KImkFYAwzd9+k++6+vXU2xtlXqj8WVF+qwzOI5pB9DbR4cKlO+PcgS/K5NRuI7erYhoHtHf3aMHCuTxXAuRYC4FQC2n8AtMuCJK0D9k5n0UlAwiM1vgDkL4qyLy3PRQAAAABJRU5ErkJggg=="
                        alt="trash"
                    />
                </button>
            </li>
        </>
    );
};