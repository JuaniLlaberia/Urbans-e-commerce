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
import { colors, sizes } from '../../utils/constants';
import { ImgInputStyle } from '../../components/ImgInputStyle';
import DobleInput from '../../components/DobleInput';
import { useEditProduct } from './useEditProduct';

const NewProductForm = ({ onCloseModal, productToEdit = {} }) => {
  const { id: editId, ...editData } = productToEdit;
  const isEditing = Boolean(editId);

  const { categories, isLoading } = useGetCategories(true);
  //Main categories
  const mainCats = categories?.filter(category => category.type === 'Main');

  const { createProduct, isCreating } = useCreateProduct();
  const { editProduct, isUpdating } = useEditProduct();
  const isWorking = isUpdating || isCreating;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: isEditing
      ? {
          ...editData,
          mainCategory: editData?.mainCategory.id,
          subCategory: editData?.subCategory.id,
        }
      : {},
  });

  //Getting the current main category
  const mainCatWatcher = watch('mainCategory') || mainCats?.at(0)?.name;
  const currentMainCat = mainCats?.filter(
    cat => cat.id === Number(mainCatWatcher)
  );

  //Sub categories => Only the ones that belong to the selected main category
  const subCats = categories?.filter(
    category =>
      category.type === 'Sub' && category.family === currentMainCat[0]?.name
  );

  if (isLoading) return <Spinner />;

  const onSubmit = data => {
    const img = typeof data.img === 'string' ? data.img : data.img[0];

    //Old imgage to remove
    const oldImg =
      typeof img !== 'string' ? editData?.img?.split('/').at(-1) : null;

    if (isEditing) {
      editProduct(
        {
          id: editId,
          editedProduct: {
            ...data,
            img,
          },
          oldImg,
        },
        {
          onSuccess: () => {
            onCloseModal();
          },
        }
      );
    } else {
      createProduct(
        {
          ...data,
          img,
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
      <Title as='h3'>
        {isEditing ? `Edit ${editData.SKU}` : 'Create'} product
      </Title>
      <DobleInput>
        <InputContainer
          label='Name'
          error={errors?.name?.message}
          id='name'
          type='vertical'
        >
          <Input
            disabled={isWorking}
            id='name'
            type='text'
            {...register('name', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='SKU'
          error={errors?.SKU?.message}
          id='sku'
          type='vertical'
        >
          <Input
            id='sku'
            disabled={isWorking}
            type='text'
            {...register('SKU', {
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
            disabled={isWorking}
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
            disabled={isWorking}
            type='number'
            {...register('quantity', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
      </DobleInput>
      <DobleInput>
        <InputContainer
          label='Main Category'
          error={errors?.mainCategory?.message}
          id='main'
          type='vertical'
        >
          <Select
            disabled={isWorking}
            {...register('mainCategory', {
              required: 'This field is required',
            })}
          >
            <Option value=''>Select Main Category</Option>
            {mainCats?.map(category => (
              <Option key={category.id} value={category.id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </InputContainer>
        <InputContainer
          label='Sub Category'
          error={errors?.subCategory?.message}
          id='sub'
          type='vertical'
        >
          <Select
            disabled={isWorking}
            {...register('subCategory', {
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
          label='Main color'
          error={errors?.mainColor?.message}
          id='color'
          type='vertical'
        >
          <Select
            id='color'
            disabled={isWorking}
            {...register('mainColor', {
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
      </DobleInput>
      <InputContainer
        label='Description'
        error={errors?.description?.message}
        id='description'
        type='vertical'
      >
        <Textarea
          disabled={isWorking}
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer
        label={<ImgInputStyle />}
        error={errors?.img?.message}
        id='image'
        type='vertical'
      >
        <Input
          id='image'
          disabled={isWorking}
          type='file'
          style={{
            display: 'none',
          }}
          {...register('img', {
            required: isEditing ? false : 'This field is required',
          })}
        />
      </InputContainer>
      <Row>
        <Button variation='outline' disabled={isWorking} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='regular' disabled={isWorking}>
          {isWorking ? (
            <SpinnerBtn />
          ) : (
            `${isEditing ? 'Edit product' : 'Add product'}`
          )}
        </Button>
      </Row>
    </Form>
  );
};

export default NewProductForm;
