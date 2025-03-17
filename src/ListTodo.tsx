import React, {useEffect, useState} from "react";
import {Todo} from "./TodoInterface.ts";
import {DeleteTodoAPI} from "./DeleteTodoAPI.ts";
import {PatchTodoAPI} from "./PatchTodoAPI.ts";

export const ListTodo = (
    {
        title,
        date,
        deleteTodo,
        todo
    }: {title: string,
        date: string,
        deleteTodo: (todo: Todo) => void,
        todo: Todo
    }
) => {
    const [inputValue, setInputValue] = useState(title)
    const [dueDate, setDueDate] = useState(date)
    const [checkbox, setCheckbox] = useState<boolean>(false)

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };

    const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(e.target.value)
    };

    const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckbox(e.target.checked)
    };

    const handleDelete = async () => {
        try {
            await DeleteTodoAPI(todo)
            deleteTodo(todo)
        } catch (error) {
            console.error("Erreur lors de la suppression de la tâche :", error)
        }
    };

    useEffect(() => {
        const updateTodoStatusDone = async () => {
            await PatchTodoAPI(todo, checkbox, inputValue, dueDate);
        };

        updateTodoStatusDone().then((r) => console.log(r));
    }, [checkbox, todo, inputValue, dueDate])


    return (
        <>
            <li>
                <input className={"li-input"} value={inputValue} onInput={inputChange}></input>
                <input type={"date"} value={dueDate} className={"li-date"} onInput={dateChange}></input>
                <input type="checkbox" checked={checkbox} onChange={checkboxChange}/>
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