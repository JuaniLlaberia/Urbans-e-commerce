import Option from './Option';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

const OrderBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get('orderBy') || '';

  const handleChange = e => {
    searchParams.set('orderBy', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select value={orderBy} onChange={handleChange}>
      {options?.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default OrderBy;
