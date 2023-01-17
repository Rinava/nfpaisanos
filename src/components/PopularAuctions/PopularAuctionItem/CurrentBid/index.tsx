import styles from './styles.module.css';

const AuctionTimer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer_item}>
        <p className={styles.timer_item_value}>19</p>
        <p className={styles.timer_item_title}>Hrs</p>
      </div>
      <div className={styles.timer_item}>
        <p className={styles.timer_item_value}>24</p>
        <p className={styles.timer_item_title}>mins</p>
      </div>
      <div className={styles.timer_item}>
        <p className={styles.timer_item_value}>19</p>
        <p className={styles.timer_item_title}>secs</p>
      </div>
    </div>
  );
};

const CurrentBid = ({ currentBid, usdBid }) => {
  return (
    <div className={styles.currentBid}>
      <p className={styles.title}>Current bid</p>
      <p className={styles.value}>1.00 ETH</p>
      <p className={styles.usd_value}>$3,618.36</p>
      <p className={styles.end}>Auction ending in</p>

      <AuctionTimer />
    </div>
  );
};

export default CurrentBid;
