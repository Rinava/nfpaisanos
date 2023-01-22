import styles from './styles.module.css';
import { LogoIcon } from '@/components/commons/Icons';
import Link from 'next/link';

const Logo = () => (
  <Link href='/' className={styles.logo}>
    <div className={styles.icon_wrapper}>
      <LogoIcon />
    </div>
    <span className={styles.title}>NFPaisanos</span>
  </Link>
);

export default Logo;
