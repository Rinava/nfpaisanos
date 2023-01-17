import styles from './styles.module.css';
import Button from '../commons/Button';

const Headline = () => {
  return (
    <section className={styles.content_block}>
      <h1 className={styles.slogan}>The new creative economy.</h1>
      <h2 className={styles.description}>
        Create, explore, & SELL digital art NFTs.
      </h2>
      <Button type='button' disabled={false} onClick={() => {}}>
        Explore
      </Button>
    </section>
  );
};
export default Headline;
