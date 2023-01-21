import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Input } from '@/components/commons/Forms';
import styles from './styles.module.css';

const Search = () => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <Input
      className={styles.search}
      placeholder='Type your keywords'
      onChange={(value) => setFilters({ type: 'search', payload: value })}
      value={filters.search}
    />
  );
};

export default Search;
