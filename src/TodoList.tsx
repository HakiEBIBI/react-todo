export const todo = [
    {
        name: 'Salut',
        done: false,
        date: Date.now(),
    },
    {
        name: 'Salut',
        done: false,
        date: Date.now(),
    }
];

export const TodoList = () => {
    return (
        <div className="all-list">
            <div className="todo-list">
                <ul>
                    {todo.map((task, index) => (
                        <li key={index}>
                            <h4>{task.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};