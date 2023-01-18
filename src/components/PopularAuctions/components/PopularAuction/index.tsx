import styles from './styles.module.css';
import Image from 'next/image';
import InfoPill from '@/components/commons/InfoPill';
import CurrentBid from '../CurrentBid';
import Button from '@/components/commons/Button';
import { ReactNode } from 'react';

interface PopularAuctionProps {
  auction: any;
  children?: ReactNode;
}

const PopularAuction = ({ auction, children }: PopularAuctionProps) => {
  const { author, authorAvatar, instantPrice, media } = auction;

  return (
    <article className={styles.auction}>
      <div className={styles.media}>
        <Image
          src={media.image}
          alt=''
          width={311}
          height={478}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
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
        <Button variant='primary' className={styles.button} onClick={() => {}}>
          Place a bid
        </Button>
        <Button className={styles.button} onClick={() => {}}>
          View item
        </Button>
        {children}
      </div>
    </article>
  );
};

export default PopularAuction;
