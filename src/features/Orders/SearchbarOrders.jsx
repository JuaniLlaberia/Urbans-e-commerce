import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';

const SearchbarOrder = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchParams.set('orderNum', query);
    setSearchParams(searchParams);
  }, [query, searchParams, setSearchParams]);

  return (
    <>
      <Input
        type='text'
        value={query}
        placeholder={`Search orders # (No 0's)`}
        onChange={e => setQuery(e.target.value)}
      />
    </>
  );
};

export default SearchbarOrder;
