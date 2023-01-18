import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Input } from '@/components/commons/Forms';

const Search = () => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <Input
      placeholder='Type your keywords'
      onChange={(value) => setFilters({ type: 'search', payload: value })}
      value={filters.search}
    />
  );
};

export default Search;
