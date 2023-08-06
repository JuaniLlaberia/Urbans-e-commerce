import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input';
import { useEffect, useState } from 'react';

const SearchbarProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length <= 2 && query !== '') return;

    searchParams.set('sku', query);
    setSearchParams(searchParams);
  }, [query, searchParams, setSearchParams]);

  return (
    <>
      <Input
        type='text'
        value={query}
        placeholder='Search products (SKU)'
        onChange={e => setQuery(e.target.value)}
      />
    </>
  );
};

export default SearchbarProducts;
