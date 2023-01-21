import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Select, Pills } from '@/components/commons/Forms';

const filterItems = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'mostLiked', label: 'Most Liked' },
  { value: 'leastLiked', label: 'Least Liked' },
  { value: 'highestBid', label: 'Highest Bid' },
  { value: 'lowestBid', label: 'Lowest Bid' },
  { value: 'highestPrice', label: 'Highest Price' },
  { value: 'lowestPrice', label: 'Lowest Price' },
];

const typeItems = [
  { value: 'all', label: 'All items' },
  { value: 'Art', label: 'Art' },
  { value: 'Photography', label: 'Photography' },
];

const Filters = () => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <div className={styles.filters}>
      <Select
        options={filterItems}
        onChange={(value) => setFilters({ type: 'sortBy', payload: value })}
        value={filters.sortBy}
        className={styles.sort}
      />
      <Pills
        options={typeItems}
        selected={filters.type}
        onChange={(value) => setFilters({ type: 'type', payload: value })}
        className={styles.type}
      />
    </div>
  );
};

export default Filters;
