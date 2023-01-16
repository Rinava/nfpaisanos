import styles from './styles.module.css';

const ContentBlock = () => {
  return (
    <div className={styles.content_block}>
      <p className={styles.description}>
        Create, explore, & SELL digital art NFTs.
      </p>
      <h4 className={styles.slogan}>The new creative economy.</h4>
      <button>Explore</button>
    </div>
  );
};
export default ContentBlock;
