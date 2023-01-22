import { LayoutContext } from '@/components/commons/Layout';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useContext } from 'react';
import styles from './styles.module.css';

interface PriceProps {
  ethValue: string;
}

const Price = ({ ethValue }: PriceProps) => {
  const {
    currencies: { eth },
  } = useContext(LayoutContext);

  const usdValue = `$${(parseFloat(ethValue.slice(0, -4)) * eth).toFixed(2)}`;

  return (
    <div className={styles.price}>
      <p className={styles.price_heading}>Current bid</p>
      <p className={styles.eth_price}>{ethValue}</p>
      <p className={styles.usd_price}>{usdValue}</p>
    </div>
  );
};

interface TimerProps {
  ending: string;
}

type measures = 'Hrs' | 'mins' | 'secs';

type Countdown = {
  [key in measures]: number;
};

const Countdown = ({ ending }: TimerProps) => {
  const [countdown, setCountdown] = useState<Countdown>({
    Hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    let timeout: any;

    const countdown = () => {
      const date = new Date(ending);
      const today = new Date();
      const diff = date.getTime() - today.getTime();

      if (diff <= 0) {
        setCountdown({ Hrs: 0, mins: 0, secs: 0 });
      } else {
        setCountdown({
          Hrs: Math.floor(diff / (1000 * 60 * 60)),
          mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }

      timeout = setTimeout(countdown, 1000);
    };

    countdown();

    return () => {
      clearTimeout(timeout);
    };
  }, [ending]);

  return (
    <>
      <p className={styles.countdown_heading}>Auction ending in</p>
      <div className={styles.countdown}>
        {Object.keys(countdown).map((key) => (
          <div className={styles.countdown_measure} key={key}>
            <p className={styles.measure}>{countdown[key as measures]}</p>
            <p className={styles.measure_label}>{key}</p>
          </div>
        ))}
      </div>
    </>
  );
};

interface CurrentBidProps {
  auction: any;
  className?: string;
}

const CurrentBid = ({ auction, className }: CurrentBidProps) => {
  return (
    <div className={clsx(styles.current_bid, className)}>
      <Price ethValue={auction.highestBid} />
      <Countdown ending={auction.endsAt} />
    </div>
  );
};

export default CurrentBid;
