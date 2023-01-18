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
          { value: 'most-liked', label: 'Most Liked' },
          { value: 'least-liked', label: 'Least Liked' },
          { value: 'highest-bid', label: 'Highest Bid' },
          { value: 'lowest-bid', label: 'Lowest Bid' },
          { value: 'highest-price', label: 'Highest Price' },
          { value: 'lowest-price', label: 'Lowest Price' },
        ]}
        onChange={(value) => setFilters({ type: 'sortBy', payload: value })}
        value={filters.sortBy}
      />
      <Pills
        options={[
          { value: 'all', label: 'All items' },
          { value: 'art', label: 'Art' },
          { value: 'photography', label: 'Photography' }
        ]}
        selected={filters.attributes.type}
        onChange={(value) => setFilters({ type: 'rarity', payload: value })}
      />
    </div>
  );
};

export default Filters;
