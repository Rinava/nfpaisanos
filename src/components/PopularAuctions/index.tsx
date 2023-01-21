import { useState } from 'react';
import { ArrowIcon } from '../commons/Icons';
import clsx from 'clsx';
import Button from '../commons/Button';
import PopularAuction from './components/PopularAuction';
import styles from './styles.module.css';

interface PopularAuctionsProps {
  auctions: any[];
}

const PopularAuctions = ({ auctions }: PopularAuctionsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    currentIndex < auctions.length - 1 && setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className={styles.popular_auctions}>
      <PopularAuction auction={auctions[currentIndex]}>
        <div className={styles.controls}>
          <Button
            className={clsx(
              styles.control,
              currentIndex === 0 && styles.disabled
            )}
            onClick={handlePrevious}
            aria-label='Previous'
            disabled={currentIndex === 0}>
            <ArrowIcon direction='scale(-1,1)' />
          </Button>
          <Button
            className={clsx(
              styles.control,
              currentIndex === auctions.length - 1 && styles.disabled
            )}
            onClick={handleNext}
            disabled={currentIndex === auctions.length - 1}
            aria-label='Next'>
            <ArrowIcon />
          </Button>
        </div>
      </PopularAuction>
    </section>
  );
};

export default PopularAuctions;
