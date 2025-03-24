import React, {useState} from 'react'
import {useAppStore} from "./useTodoStore.ts";
import {postTodoFetch} from "./PostTodo.ts";
import {useShallow} from "zustand/react/shallow";

export const TodoStructure = () => {
    const {setError, setSort, addTodo} = useAppStore(useShallow((state) => ({
        setError: state.setError,
        setSort: state.setSort,
        addTodo: state.addTodo,
    })));
    const [inputValue, setInputValue] = useState('')
    const [dueDate, setDueDate] = useState('')

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };

    const HandleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDueDate(e.target.value)
    };

    const newTodo = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (inputValue.trim() && dueDate) {
            const newTodo: { title: string; due_date: string } = {title: inputValue, due_date: dueDate}
            if (dueDate) {
                setError("please enter an input")
            } else {
                setError("please enter an due date")
            }
            try {
                const createdTodo = await postTodoFetch(newTodo)
                addTodo(createdTodo)
            } catch (error) {
                console.error(error)
            }
            setInputValue('')
            setDueDate('')
            setError(null)

            if (isNaN(new Date(dueDate).getTime())) {
                setError("Please enter a valid date.");
                return;
            }
        }
        ;
    }

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
                    <select onChange={(e) => setSort(e.target.value)}>
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