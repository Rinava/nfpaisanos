import styles from './styles.module.css';
import Search from './components/Search';
import Auction from './components/Auction';

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
    </div>
  );
};

export default Auctions;
