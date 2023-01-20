import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Input } from '@/components/commons/Forms';
import styles from './styles.module.css';
import clsx from 'clsx';

interface SearchProps {
  className?: string;
}
const Search = ({ className }: SearchProps) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <Input
      className={clsx(styles.search, className)}
      placeholder='Type your keywords'
      onChange={(value) => setFilters({ type: 'search', payload: value })}
      value={filters.search}
    />
  );
};

export default Search;
