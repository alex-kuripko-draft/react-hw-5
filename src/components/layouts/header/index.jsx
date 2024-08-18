import logo from '../../../assets/img/logo.svg';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className="header">
            <img className={styles.header} src={logo} alt="logo" />
        </div>
    );
};

export default Header;
