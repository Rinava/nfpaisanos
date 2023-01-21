import styles from './styles.module.css';
import Logo from '../Logo';
import { BurgerIcon } from '../../../Icons';

const Header = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Logo />
      <button className={styles.menu} aria-label='Menu' onClick={() => {}}>
        <BurgerIcon />
      </button>
    </header>
  </div>
);

export default Header;
