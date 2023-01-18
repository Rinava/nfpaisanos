import styles from './styles.module.css';
import Button from '../commons/Button';

interface HeadlineProps {
  callToAction: () => void;
}

const Headline = ({ callToAction }: HeadlineProps) => {
  return (
    <section className={styles.headline}>
      <h1 className={styles.slogan}>The new creative economy.</h1>
      <h2 className={styles.description}>
        Create, explore, & SELL digital art NFTs.
      </h2>
      <Button type='button' onClick={callToAction}>
        Explore
      </Button>
    </section>
  );
};
export default Headline;
