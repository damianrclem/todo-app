import FormHeader from './Header/FormHeader';
import CalendarScroll from './CalendarScroll/CalendarScroll';
import TaskInput from './TaskInput/TaskInput';
import TodoList from './TodoList/TodoList';

import { TodoProvider } from '../Providers/TodoProvider';

import styles from './TodoForm.module.css';

const TodoForm = () => {
    const onChangeHandler = (event) => {
        setTask(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <TodoProvider>
                <FormHeader />
                <CalendarScroll />
                <TaskInput />
                <TodoList />
            </TodoProvider>
        </div>
    );
};

export default TodoForm;
