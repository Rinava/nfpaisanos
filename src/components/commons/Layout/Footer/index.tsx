import styles from './styles.module.css';
import Logo from '../Logo';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <Logo />
        <h2 className={styles.slogan}>the new creative economy.</h2>
      </div>
      <p className={styles.credits}>Created with ❤ by Lara Mateo</p>
    </footer>
  );
};

export default Footer;
