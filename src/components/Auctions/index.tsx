import styles from './styles.module.css';
import Search from './components/Search';
import Auction from './components/Auction';
import Button from '@/components/commons/Button';
import { LoadingIcon } from '@/components/commons/Icons';

interface AuctionsProps {
  auctions: any[];
}

const Auctions = ({ auctions }: AuctionsProps) => {
  return (
    <div className={styles.auctions}>
      <Search />
      {auctions.map((auction) => (
        <Auction key={auction.id} auction={auction} />
      ))}
      <Button onClick={() => {}}>
        <span className={styles.icon}>
          <LoadingIcon />
        </span>
        Load more
      </Button>
    </div>
  );
};

export default Auctions;
