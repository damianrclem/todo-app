import { useState, useContext } from 'react';
import { TodoContext } from '../../Providers/TodoProvider';

import { AiOutlineAlignLeft, AiOutlinePlus } from 'react-icons/ai';

import styles from './TaskInput.module.css';

const TaskInput = ({ onChangeHandler }) => {
    const [task, setTask] = useState();
    const [tasks, setTasks] = useContext(TodoContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTasks = [
            {
                id: Math.round(Math.random() * 10000),
                title: task,
                isCompleted: false,
            },
            ...tasks,
        ];

        setTasks(newTasks);
    };

    return (
        <section className={styles.form_list_wrapper}>
            <form onSubmit={onSubmit}>
                <div className={styles.input__wrapper}>
                    <span>
                        <AiOutlineAlignLeft className={styles.input__icon} />
                    </span>
                    <input
                        type='text'
                        className={styles.task__input}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button>
                        <AiOutlinePlus />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default TaskInput;
