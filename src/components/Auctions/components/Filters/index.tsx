import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Select } from '@/components/commons/Forms';

interface FiltersProps {}

const Filters = (props: FiltersProps) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
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
  );
};

export default Filters;
