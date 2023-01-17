import styles from './styles.module.css';
import Logo from '../Logo';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo_container}>
      <Logo />
      <p className={styles.slogan}>the new creative economy.</p>
    </div>
    <p className={styles.credits}>Created with ❤️ by Lara Mateo</p>
  </footer>
);

export default Footer;
