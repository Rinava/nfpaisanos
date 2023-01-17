import styles from './styles.module.css';
import Image from 'next/image';
import InfoPill from '@/components/commons/InfoPill';
import CurrentBid from '../CurrentBid';
import Button from '@/components/commons/Button';

interface PopularAuctionProps {
  auction: any;
}

const PopularAuction = ({ auction }: PopularAuctionProps) => {
  const { author, authorAvatar, instantPrice, media } = auction;

  return (
    <article className={styles.auction}>
      <Image
        src={media.image}
        alt=''
        width={311}
        height={478}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>Marco carrillo®</h3>
        <div className={styles.about}>
          <InfoPill image={authorAvatar} info={author} title='Creator' />
          <InfoPill
            image='/instant-price.svg'
            info={instantPrice}
            title='Instant price'
          />
        </div>
      </div>
      <CurrentBid className={styles.current_bid} auction={auction} />
      <Button
        variant='primary'
        className={styles.bid_button}
        onClick={() => {}}>
        Place a bid
      </Button>
      <Button onClick={() => {}}>View item</Button>
    </article>
  );
};

export default PopularAuction;
