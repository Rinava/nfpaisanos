import styles from './styles.module.css';
import Image from 'next/image';
import Button from '@/components/commons/Button';
import { CandleSticksIcon, BidIcon } from '@/components/commons/Icons';

interface AuctionProps {
  auction: any;
}

const Auction = ({ auction }: AuctionProps) => {
  return (
    <div className={styles.auction}>
      <div className={styles.image_container}>
        <div className={styles.bid_button}>
          <Button variant='primary' onClick={() => {}}>
            Place a Bid
            <span className={styles.bid_icon}>
              <BidIcon />
            </span>
          </Button>
        </div>
        <Image
          src={auction.media.image}
          alt=''
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.title}>Amazing digital art</h3>
          <p className={styles.price}>{auction.instantPrice}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.bid_users}>
            {auction.bidUsers.map((user: any, i: number) => (
              <Image
                key={i}
                src={user.avatar}
                alt={user.name}
                width={24}
                height={24}
                className={styles.user_avatar}
              />
            ))}
          </div>
          <p className={styles.stock}>{auction.stock} in stock</p>
        </div>
        <div className={styles.extra_info}>
          <CandleSticksIcon />
          <p className={styles.bid}>
            Highest bid
            <span className={styles.highest_bid}>{auction.highestBid}</span>
          </p>
          <Button variant='text' onClick={() => {}}>
            New bid 🔥
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
