export const TodoList = ({todoList}: { todoList: string[] }) => {
    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>
                    {todoList.map((task, index) => (
                        <li key={index}>
                            <h4>{task}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};