import Select from '../../components/Select';
import Title from '../../components/Title';
import Option from '../../components/Option';
import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import FilterButton from './FilterBtn';
import { orderProductsStore } from '../../utils/orderConsts';
import { colors } from '../../utils/constants';
import { filterPriceRange } from '../../utils/filterConsts';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

const FilterSortForm = ({ close }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  //We get the current applied filters, so we can share and save the URL with filters applied
  const crrSort = searchParams.get('sortBy') || 'created_at-asc';
  const crrColor = searchParams.get('filterColor') || 'All';
  const crrPrice = searchParams.get('filterPrice') || 'All';

  const { register, handleSubmit } = useForm({
    //Setting default values
    defaultValues: {
      sort: crrSort,
      color: crrColor,
      priceRange: crrPrice,
    },
  });

  //Setting the filters
  const onSubmit = data => {
    if (data.sort) {
      searchParams.set('sortBy', data.sort);
      setSearchParams(searchParams);
    }
    if (data.color) {
      searchParams.set('filterColor', data.color);
      setSearchParams(searchParams);
    }
    if (data.priceRange) {
      searchParams.set('filterPrice', data.priceRange);
      setSearchParams(searchParams);
    }

    close();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Filter & Sort</Title>
      <InputContainer label='Sort By' type='vertical'>
        <Select {...register('sort')}>
          {orderProductsStore.map(item => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer label='Color' type='vertical'>
        <Select {...register('color')}>
          <Option value='All'> No filter </Option>
          {colors.map(color => (
            <Option key={color} value={color}>
              {color}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <InputContainer label='Price' type='vertical'>
        <Select {...register('priceRange')}>
          {filterPriceRange.map(price => (
            <Option key={price.label} value={price.value}>
              {price.label}
            </Option>
          ))}
        </Select>
      </InputContainer>
      <br />
      <FilterButton width='full'>Apply</FilterButton>
    </Form>
  );
};

export default FilterSortForm;
