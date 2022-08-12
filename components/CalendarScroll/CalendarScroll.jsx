import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './CalendarScroll.module.css';

const date = new Date().toDateString();

const CalendarScroll = () => {
    return (
        <section className={styles.calendar}>
            <div className={styles.arrow__left}>
                <BsChevronLeft />
            </div>
            <div className={styles.date__wrapper}>
                <div className={styles.day}>Friday</div>
                <div className={styles.date}>{date}</div>
            </div>
            <div className={styles.arrow__right}>
                <BsChevronRight />
            </div>
        </section>
    );
};

export default CalendarScroll;
