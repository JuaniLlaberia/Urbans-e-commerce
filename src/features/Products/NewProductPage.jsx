import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Select from '../../components/Select';
import Row from '../../components/Row';
import Button from '../../components/Button';
import SpinnerBtn from '../../components/SpinnerBtn';
import Spinner from '../../components/Spinner';
import Option from '../../components/Option';
import Textarea from '../../components/Textarea';
import DobleInput from '../../components/DobleInput';
import { useForm } from 'react-hook-form';
import { useGetCategories } from '../Categories/useGetCategories';
import { useCreateProduct } from './useCreateProduct';
import { styled } from 'styled-components';
import { colors, sizes } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { ImgInputStyle } from '../../components/ImgInputStyle';

const StyledPage = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 5rem;
  width: 100%;
  border-bottom: var(--border-sm);

  @media (max-width: 800px) {
    padding-bottom: 10px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 1200px) and (min-width: 800px) {
    padding-bottom: 100px;
    grid-template-columns: 1fr;
  }
`;

const Divider = styled.div`
  background-color: var(--color-white-2);
  box-shadow: var(--shadow-light);
  border-radius: var(--raidius-md);
  padding: 1rem;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const NewProductPage = () => {
  const navigate = useNavigate();
  const { categories, isLoading } = useGetCategories();
  //Main categories
  const mainCats = categories?.filter(category => category.type === 'Main');
  //Sub categories (Only show sub categories that belong to the selected main)
  const subCats = categories?.filter(
    category => category.type === 'Sub' //&& category.family === 'Mens'
  );

  const { createProduct, isCreating } = useCreateProduct();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  if (isLoading) return <Spinner />;

  const onSubmit = data => {
    createProduct(
      {
        name: data.name,
        price: Number(data.price),
        description: data.description,
        img: data.image,
        mainColor: data.color,
        mainCategory: data.main,
        subCategory: data.sub,
        SKU: data.sku,
        quantity: Number(data.quantity),
        size: data.size,
      },
      {
        onSuccess: () => {
          navigate('/products');
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h4'>Create product</Title>
      <StyledPage>
        <Divider>
          <Title as='h3'>Information</Title>
          <DobleInput>
            <InputContainer
              label='Name'
              error={errors?.name?.message}
              id='name'
              type='vertical'
            >
              <Input
                disabled={isCreating}
                id='name'
                type='text'
                {...register('name', {
                  required: 'This field is required',
                })}
              />
            </InputContainer>
            <InputContainer
              label='SKU'
              error={errors?.sku?.message}
              id='sku'
              type='vertical'
            >
              <Input
                id='sku'
                disabled={isCreating}
                type='text'
                {...register('sku', {
                  required: 'This field is required',
                })}
              />
            </InputContainer>
          </DobleInput>
          <DobleInput>
            <InputContainer
              label='Price'
              error={errors?.price?.message}
              id='price'
              type='vertical'
            >
              <Input
                id='price'
                disabled={isCreating}
                type='number'
                {...register('price', {
                  required: 'This field is required',
                  min: {
                    message: 'The price cannot be 0',
                    value: 1,
                  },
                })}
              />
            </InputContainer>
            <InputContainer
              label='Quantity'
              error={errors?.quantity?.message}
              id='quantity'
              type='vertical'
            >
              <Input
                id='quantity'
                disabled={isCreating}
                type='number'
                {...register('quantity', {
                  required: 'This field is required',
                })}
              />
            </InputContainer>
          </DobleInput>
          <InputContainer
            label='Description'
            error={errors?.description?.message}
            id='description'
            type='vertical'
          >
            <Textarea
              id='description'
              disabled={isCreating}
              {...register('description', {
                required: 'This field is required',
              })}
            />
          </InputContainer>
        </Divider>
        <Divider>
          <Title as='h3'>Extra</Title>
          <InputContainer
            label='Size'
            error={errors?.size?.message}
            id='size'
            type='vertical'
          >
            <Select
              id='size'
              disabled={isCreating}
              {...register('size', {
                required: 'This field is required',
              })}
            >
              <Option value=''>Select a size</Option>
              {sizes?.map(size => (
                <Option key={size} value={size}>
                  {size}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <InputContainer
            label='Main color'
            error={errors?.color?.message}
            id='color'
            type='vertical'
          >
            <Select
              id='color'
              disabled={isCreating}
              {...register('color', {
                required: 'This field is required',
              })}
            >
              <Option value=''>Select a color</Option>
              {colors?.map(color => (
                <Option key={color} value={color}>
                  {color}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <DobleInput>
            <InputContainer
              label='Main Category'
              error={errors?.main?.message}
              id='main'
              type='vertical'
            >
              <Select
                id='main'
                disabled={isCreating}
                {...register('main', {
                  required: 'This field is required',
                })}
              >
                {mainCats?.map(category => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </InputContainer>
            <InputContainer
              label='Sub Category'
              error={errors?.sub?.message}
              id='sub'
              type='vertical'
            >
              <Select
                id='sub'
                disabled={isCreating}
                {...register('sub', {
                  required: 'This field is required',
                })}
              >
                <Option value=''>Select Sub Category</Option>
                {subCats?.map(category => (
                  <Option key={category.id} value={category.id}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </InputContainer>
          </DobleInput>
          <InputContainer
            label={<ImgInputStyle />}
            error={errors?.image?.message}
            id='image'
            type='vertical'
          >
            <Input
              id='image'
              disabled={isCreating}
              type='file'
              style={{
                display: 'none',
              }}
              {...register('image', {
                required: 'This field is required',
              })}
            />
          </InputContainer>
        </Divider>
      </StyledPage>
      <Row>
        <Button
          type='outline'
          disabled={isCreating}
          onClick={() => navigate('/products')}
        >
          Cancel
        </Button>
        <Button type='regular' disabled={isCreating}>
          {isCreating ? <SpinnerBtn /> : 'Add product'}
        </Button>
      </Row>
    </Form>
  );
};

export default NewProductPage;
