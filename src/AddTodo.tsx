export const TodoStructure = () => {
    return (
        <div className="all">
            <div className="AllInput">
                <input/>
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
    );
};