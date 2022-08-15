import styles from './CheckRadio.module.css';

const CheckRadio = ({ id, type, name, inputStyles = '' }) => {
    return <input id={id} className={styles.check + ' ' + inputStyles} type={type} name={name} />;
};

export default CheckRadio;
