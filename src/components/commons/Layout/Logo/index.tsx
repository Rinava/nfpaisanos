import { LogoIcon } from '../../Icons';
import styles from './styles.module.css';
const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <div className={styles.icon_wrapper}>
        <LogoIcon />
      </div>
      <span className={styles.title}>NFPaisanos</span>
    </h1>
  );
};
export default Logo;
