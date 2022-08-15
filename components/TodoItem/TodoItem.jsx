import styles from './TodoItem.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import CheckRadio from '../Atoms/CheckRadio/CheckRadio';

export const TodoItem = ({ id, title, isCompleted }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list__item}>
                <div className={styles.list__item__left}>
                    <CheckRadio id={id} type='checkbox' name={title} />
                    <div className={styles.list__item__task}>{title}</div>
                </div>
                <div className={styles.list__item__options}>
                    <FaRegTrashAlt className={styles.trash} />
                </div>
            </div>
        </div>
    );
};
