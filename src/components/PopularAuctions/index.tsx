import PopularAuctionItem from './PopularAuctionItem';
import styles from './styles.module.css';

const PopularAuctions = ({ auctions }) => {
  return (
    <section>
      {auctions.map((auction) => {
        return <PopularAuctionItem key={auction.id} auction={auction} />;
      })}
    </section>
  );
};

export default PopularAuctions;
