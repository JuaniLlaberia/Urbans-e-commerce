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
import { sizes } from '../../utils/constants';
import DobleInput from '../../components/DobleInput';
import { useGetProducts } from './useGetProducts';
import { useCreateVariant } from './useCreateVariant';
import { useEditStock } from './useEditStock';

const NewProductForm = ({ onCloseModal, variantToEdit = {} }) => {
  const { id: editId, ...editData } = variantToEdit;
  const isEditing = Boolean(editId);

  const { products, isLoading } = useGetProducts(true);

  const { addVariant, isCreating } = useCreateVariant();
  const { editStock, isUpdating } = useEditStock();

  const isWorking = isUpdating || isCreating;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: isEditing
      ? {
          ...editData,
        }
      : {},
  });

  if (isLoading) return <Spinner />;

  const onSubmit = data => {
    if (isEditing) {
      editStock(
        {
          id: editId,
          newData: {
            size: data.size,
            quantity: data.quantity,
            productId: Number(data.productId),
          },
        },
        {
          onSuccess: () => {
            onCloseModal();
          },
        }
      );
    } else {
      addVariant(
        {
          productId: Number(data.productId),
          newVariant: { size: data.size, quantity: data.quantity },
        },
        {
          onSuccess: () => {
            onCloseModal();
          },
        }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>{isEditing ? 'Edit' : 'Create'} stock item</Title>
      <InputContainer
        label='Product'
        error={errors?.productId?.message}
        id='product'
        type='vertical'
      >
        <Input
          list='product'
          type='number'
          {...register('productId', {
            required: 'This field is required',
          })}
        />

        <datalist id='product'>
          {products?.map(product => (
            <Option key={product.id} value={product.id}>
              {product.SKU}
            </Option>
          ))}
        </datalist>
      </InputContainer>
      <DobleInput>
        <InputContainer
          label='Size'
          error={errors?.size?.message}
          id='size'
          type='vertical'
        >
          <Select
            id='size'
            disabled={isWorking}
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
          label='Quantity'
          error={errors?.quantity?.message}
          id='quantity'
          type='vertical'
        >
          <Input
            id='quantity'
            disabled={isWorking}
            type='number'
            {...register('quantity', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
      </DobleInput>
      <Row>
        <Button variation='outline' disabled={isWorking} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='regular' disabled={isWorking}>
          {isWorking ? <SpinnerBtn /> : isEditing ? 'Edit item' : 'Add item'}
        </Button>
      </Row>
    </Form>
  );
};

export default NewProductForm;
