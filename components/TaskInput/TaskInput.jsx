import { AiOutlineAlignLeft, AiOutlinePlus } from 'react-icons/ai';

import styles from './TaskInput.module.css';

const TaskInput = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.input__wrapper}>
                <span>
                    <AiOutlineAlignLeft className={styles.input__icon} />
                </span>
                <input type='text' className={styles.task__input} />
                <button>
                    <AiOutlinePlus />
                </button>
            </div>
        </section>
    );
};

export default TaskInput;
