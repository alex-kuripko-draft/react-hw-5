import styles from './icon.module.css';

const Icon = ({ svg }) => {
    return (
        <div className={styles.icon}>
            {svg}
        </div>
    );
};

export default Icon;
