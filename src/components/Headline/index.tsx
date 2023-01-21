import styles from './styles.module.css';
import Button from '@/components/commons/Button';
import clsx from 'clsx';

interface HeadlineProps {
  callToAction: () => void;
  className?: string;
}

const Headline = ({ callToAction, className }: HeadlineProps) => {
  return (
    <section className={clsx(styles.headline, className)}>
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
