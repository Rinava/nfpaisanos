import { LogoIcon } from '../../../Icons';
import styles from './styles.module.css';

const Logo = () => (
  <span className={styles.logo}>
    <div className={styles.icon_wrapper}>
      <LogoIcon />
    </div>
    <span className={styles.title}>NFPaisanos</span>
  </span>
);

export default Logo;
