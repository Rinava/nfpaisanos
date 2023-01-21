import styles from './styles.module.css';
import { LogoIcon } from '@/components/commons/Icons';

const Logo = () => (
  <span className={styles.logo}>
    <div className={styles.icon_wrapper}>
      <LogoIcon />
    </div>
    <span className={styles.title}>NFPaisanos</span>
  </span>
);

export default Logo;
