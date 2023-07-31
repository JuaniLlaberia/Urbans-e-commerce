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
import { useForm } from 'react-hook-form';
import { useGetCategories } from '../Categories/useGetCategories';
import { useCreateProduct } from './useCreateProduct';
import Textarea from '../../components/Textarea';

const NewProductForm = ({ onCloseModal }) => {
  const { categories, isLoading } = useGetCategories();
  //Main categories
  const mainCats = categories?.filter(category => category.type === 'Main');
  //Sub categories
  const subCats = categories?.filter(category => category.type === 'Sub');

  const { createProduct, isCreating } = useCreateProduct();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (isLoading) return <Spinner />;

  const onSubmit = data => {
    if (data.sub === '') return;

    createProduct(
      {
        name: data.name,
        price: Number(data.price),
        discount: Number(data.discount),
        description: data.description,
        mainColor: '',
        mainCategory: data.main,
        subCategory: data.sub,
        img: data.image,
        size: data.size,
      },
      {
        onSuccess: () => {
          onCloseModal();
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Create product</Title>
      <InputContainer
        label='Name'
        error={errors?.name?.message}
        id='name'
        type='vertical'
      >
        <Input
          disabled={isCreating}
          type='text'
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer
        label='Price'
        error={errors?.price?.message}
        id='price'
        type='vertical'
      >
        <Input
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
        label='Discount'
        error={errors?.discount?.message}
        id='discount'
        type='vertical'
      >
        <Input
          disabled={isCreating}
          type='number'
          {...register('discount', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer
        label='Description'
        error={errors?.description?.message}
        id='description'
        type='vertical'
      >
        <Textarea
          disabled={isCreating}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer
        label='Main Category'
        error={errors?.main?.message}
        id='main'
        type='vertical'
      >
        <Select
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
          disabled={isCreating}
          //   name='sub'
          //   ref={register}
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
      <InputContainer
        label='Image'
        error={errors?.image?.message}
        id='image'
        type='vertical'
      >
        <Input
          disabled={isCreating}
          type='file'
          style={{
            background: 'transparent',
            boxShadow: 'none',
            color: 'var(--color-white-6)',
          }}
          {...register('image', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <Row>
        <Button type='outline' disabled={isCreating} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button type='regular' disabled={isCreating}>
          {isCreating ? <SpinnerBtn /> : 'Add product'}
        </Button>
      </Row>
    </Form>
  );
};

export default NewProductForm;
