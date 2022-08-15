import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const fetchTasks = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=5')
        .then((resp) => resp.json())
        .then((data) => {
            return data;
        });
};

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks().then((tasks) => setTasks(tasks));
    }, []);

    return <TodoContext.Provider value={[tasks, setTasks]}>{children}</TodoContext.Provider>;
};
