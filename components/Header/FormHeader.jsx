import styles from './FormHeader.module.css';

const FormHeader = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.active}>Day</div>
            <div>Week</div>
            <div>Month</div>
        </nav>
    );
};

export default FormHeader;
