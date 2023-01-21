import styles from './styles.module.css';
import Link from 'next/link';
import Logo from '../Logo';
import { BurgerIcon } from '../../../Icons';
import Button from '@/components/commons/Button';

const Header = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Logo />
      <div className={styles.links}>
        <Link href='/' className={styles.link}>
          Discover
        </Link>
        <Link href='/' className={styles.link}>
          What we do
        </Link>
      </div>
      <button className={styles.menu} aria-label='Menu' onClick={() => {}}>
        <BurgerIcon />
      </button>
      <Button className={styles.connect_wallet} onClick={() => {}}>
        Connect Wallet
      </Button>
    </header>
  </div>
);

export default Header;
