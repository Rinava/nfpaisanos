import styles from './styles.module.css';
import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Input } from '@/components/commons/Forms';

const Search = () => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <Input
      className={styles.search}
      placeholder='Type to find something nice...'
      onChange={(value) => setFilters({ type: 'search', payload: value })}
      value={filters.search}
    />
  );
};

export default Search;
