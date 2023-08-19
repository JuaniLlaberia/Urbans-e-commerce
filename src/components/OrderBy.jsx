import Option from './Option';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

const OrderBy = ({ options, variable = 'orderBy' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get(variable) || '';

  const handleChange = e => {
    searchParams.set(variable, e.target.value);
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
