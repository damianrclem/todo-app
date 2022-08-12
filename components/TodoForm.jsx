import FormHeader from './Header/FormHeader';
import CalendarScroll from './CalendarScroll/CalendarScroll';
import TaskInput from './TaskInput/TaskInput';

import styles from './TodoForm.module.css';

const TodoForm = () => {
    return (
        <div className={styles.wrapper}>
            {<FormHeader />}
            {<CalendarScroll />}
            <div className={styles.form_list_wrapper}>
                {<TaskInput />}
                {/* Input Todo List */}
            </div>
        </div>
    );
};

export default TodoForm;
