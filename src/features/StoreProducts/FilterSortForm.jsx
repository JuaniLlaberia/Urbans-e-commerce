import Title from '../../components/Title';
import Form from '../../components/Form';
import FieldSet from '../../components/FieldSet';
import AccordionText from '../../components/AccordionText';
import FilterButton from './FilterBtn';
import { orderProductsStore } from '../../utils/orderConsts';
import { colors } from '../../utils/constants';
import { filterPriceRange } from '../../utils/filterConsts';
import { useForm } from 'react-hook-form';
import { useParams, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useGetSubCategories } from '../Categories/useGetSubCategories';
import SpinnerBtn from '../../components/SpinnerBtn';

const Input = styled.input`
  accent-color: var(--icons-color);
  width: 18px;
  transform: scale(1.25);
  cursor: pointer;
`;

const Label = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 0.4rem 0.3rem;

  &:has(> input:checked) {
    background-color: var(--color-white-3);
  }
`;

const ColorTag = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 1000px;
  border: var(--border-sm);
  cursor: pointer;
`;

const ColorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
`;

const FilterSortForm = ({ close }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mainCategory } = useParams();
  const { subCategories, isLoading } = useGetSubCategories();

  //We get the current applied filters, so we can share and save the URL with filters applied
  const crrSort = searchParams.get('sortBy') || 'created_at-asc';
  const crrColor = searchParams.get('filterColor') || 'All';
  const crrPrice = searchParams.get('filterPrice') || 'All';
  const crrSub = searchParams.get('subCar') || '';

  const { register, handleSubmit } = useForm({
    //Setting default values
    defaultValues: {
      sort: crrSort,
      color: crrColor,
      priceRange: crrPrice,
      sub: crrSub,
    },
  });

  if (isLoading) return <SpinnerBtn />;

  const crrSubCategories = subCategories.filter(
    cat => cat.family === mainCategory
  );

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

    searchParams.set('subCat', data.sub);
    setSearchParams(searchParams);

    close();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Filter & Sort</Title>
      <AccordionText>
        <AccordionText.Opener opens='sort' title='Sort By' />
        <AccordionText.Body id='sort'>
          <FieldSet id='sort'>
            {orderProductsStore.map(item => (
              <label htmlFor={item.label} key={item.value}>
                <Input
                  id={item.label}
                  type='radio'
                  value={item.value}
                  name='sort'
                  {...register('sort')}
                />{' '}
                {item.label}
              </label>
            ))}
          </FieldSet>
        </AccordionText.Body>
      </AccordionText>
      <AccordionText>
        <AccordionText.Opener title='Product Type' opens='sub-classes' />
        <AccordionText.Body id='sub-classes'>
          <ColorsGrid>
            <Label>
              <Input
                type='radio'
                style={{ display: 'none' }}
                value=''
                name='sub-cat'
                {...register('sub')}
              />
              All
            </Label>
            {crrSubCategories?.map(cat => (
              <Label key={cat.id}>
                <Input
                  type='radio'
                  style={{ display: 'none' }}
                  name='sub-cat'
                  value={cat.name}
                  {...register('sub')}
                />
                {cat.name}
              </Label>
            ))}
          </ColorsGrid>
        </AccordionText.Body>
      </AccordionText>
      <AccordionText>
        <AccordionText.Opener opens='color' title='Color' />
        <AccordionText.Body id='color'>
          <ColorsGrid>
            <Label>
              <Input
                type='radio'
                value='All'
                name='color'
                style={{ display: 'none' }}
                {...register('color')}
              />{' '}
              All
            </Label>
            {colors.map(color => (
              <Label htmlFor={color} key={color}>
                <Input
                  id={color}
                  type='radio'
                  value={color}
                  name='color'
                  style={{ display: 'none' }}
                  {...register('color')}
                />{' '}
                <ColorTag style={{ backgroundColor: color }}></ColorTag>
                <p style={{ fontSize: '.7rem' }}>{color}</p>
              </Label>
            ))}
          </ColorsGrid>
        </AccordionText.Body>
      </AccordionText>
      <AccordionText>
        <AccordionText.Opener opens='priceRange' title='Price Range' />
        <AccordionText.Body id='priceRange'>
          <FieldSet id='priceRange'>
            {filterPriceRange.map(price => (
              <label htmlFor={price.label} key={price.value}>
                <Input
                  {...register('priceRange')}
                  id={price.label}
                  type='radio'
                  value={price.value}
                  name='priceRange'
                />{' '}
                {price.label}
              </label>
            ))}
          </FieldSet>
        </AccordionText.Body>
      </AccordionText>

      <br />
      <FilterButton width='full'>Apply</FilterButton>
    </Form>
  );
};

export default FilterSortForm;
