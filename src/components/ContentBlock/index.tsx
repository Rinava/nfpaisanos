import styles from './styles.module.css';
import Button from '../commons/Button';
const ContentBlock = () => {
  return (
    <div className={styles.content_block}>
      <p className={styles.description}>
        Create, explore, & SELL digital art NFTs.
      </p>
      <h4 className={styles.slogan}>The new creative economy.</h4>
      <Button type='button' disabled={false} onClick={() => {}}>
        Explore
      </Button>
    </div>
  );
};
export default ContentBlock;
