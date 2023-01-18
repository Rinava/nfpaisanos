import { useContext } from 'react';
import { AuctionsContext } from '../..';
import { Input } from '@/components/commons/Forms';

interface SearchProps {
  className?: string;
}
const Search = ({ className }: SearchProps) => {
  const { setFilters, filters } = useContext(AuctionsContext);

  return (
    <Input
      className={className}
      placeholder='Type your keywords'
      onChange={(value) => setFilters({ type: 'search', payload: value })}
      value={filters.search}
    />
  );
};

export default Search;
