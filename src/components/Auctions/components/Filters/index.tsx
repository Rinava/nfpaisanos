import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Select } from '@/components/commons/Forms';
import clsx from 'clsx';
import Pills from '@/components/commons/Forms/Pills';

interface FiltersProps {
  className?: string;
}

const Filters = ({ className }: FiltersProps) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <div className={clsx(styles.filters, className)}>
      <Select
        label='Sort By'
        options={[
          { value: 'newest', label: 'Newest' },
          { value: 'oldest', label: 'Oldest' },
          { value: 'mostLiked', label: 'Most Liked' },
          { value: 'leastLiked', label: 'Least Liked' },
          { value: 'highestBid', label: 'Highest Bid' },
          { value: 'lowestBid', label: 'Lowest Bid' },
          { value: 'highestPrice', label: 'Highest Price' },
          { value: 'lowestPrice', label: 'Lowest Price' },
        ]}
        onChange={(value) => setFilters({ type: 'sortBy', payload: value })}
        value={filters.sortBy}
      />
      <Pills
        options={[
          { value: 'all', label: 'All items' },
          { value: 'Art', label: 'Art' },
          { value: 'Photography', label: 'Photography' },
        ]}
        selected={filters.type}
        onChange={(value) => setFilters({ type: 'type', payload: value })}
      />
    </div>
  );
};

export default Filters;
