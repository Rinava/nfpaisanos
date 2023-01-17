import { useState } from 'react';
import Input from '@/components/commons/Forms/Input';

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearch(value);
    console.log(search);
  };

  return (
    <Input
      placeholder='Type your keywords'
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Search;
