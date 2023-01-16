import styles from './styles.module.css';
import Logo from '../Logo';
import { BurgerIcon } from '../../Icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.icon_wrapper} aria-label='Menu'>
        <BurgerIcon />
      </div>
    </header>
  );
};

export default Header;
