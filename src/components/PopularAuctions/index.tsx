import { useState } from 'react';
import { ArrowIcon } from '../commons/Icons';
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
    <section>
      <PopularAuction auction={auctions[currentIndex]} />
      <div className={styles.controls}>
        <Button
          className={styles.control}
          onClick={handlePrevious}
          aria-label='Previous'>
          <ArrowIcon direction='scale(-1,1)' />
        </Button>
        <Button
          className={styles.control}
          onClick={handleNext}
          aria-label='Next'>
          <ArrowIcon />
        </Button>
      </div>
    </section>
  );
};

export default PopularAuctions;
