import { useContext } from 'react';

import { TodoItem } from '../TodoItem/TodoItem';
import { TodoContext } from '../../Providers/TodoProvider';

const TodoList = () => {
    const [tasks, setTasks] = useContext(TodoContext);

    return tasks.map((task, index) => <TodoItem key={task.id + index} {...task} />);
};

export default TodoList;
