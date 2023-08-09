import { useForm } from 'react-hook-form';
import { useCreateCategory } from './useCreateCategory';
import { useGetMainCategories } from './useGetMainCategories';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import Spinner from '../../components/Spinner';
import SpinnerBtn from '../../components/SpinnerBtn';
import Select from '../../components/Select';
import Option from '../../components/Option';
import Row from '../../components/Row';
import Title from '../../components/Title';

const NewCategoryForm = ({ onCloseModal }) => {
  const { createCategory, isCreating } = useCreateCategory();
  const { mainCategories, isLoading } = useGetMainCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const isSub = watch('type');

  if (isLoading) return <Spinner />;

  const onSubmit = ({ name, type, family }) => {
    if (!name) return;

    const catType = type === 'Main category' ? 'Main' : 'Sub';

    createCategory(
      {
        name,
        type: catType,
        family: family || null,
      },
      {
        onSuccess: () => {
          reset();
          onCloseModal();
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>Create category</Title>
      <InputContainer
        type='vertical'
        label='Category name'
        error={errors?.name?.message}
        id='name'
      >
        <Input
          id='name'
          type='text'
          disabled={isCreating}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <InputContainer
        type='vertical'
        label='Category type'
        error={errors?.type?.message}
        id='type'
      >
        <Select
          id='type'
          {...register('type', {
            required: 'This field is required',
          })}
        >
          <Option>Main category</Option>
          <Option>Sub category</Option>
        </Select>
      </InputContainer>
      {isSub === 'Sub category' && (
        <InputContainer
          type='vertical'
          label='Category family'
          error={errors?.family?.message}
          id='family'
        >
          <Select
            id='family'
            {...register('family', {
              required: 'This field is required',
            })}
          >
            {mainCategories?.map(category => (
              <Option key={category.id} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
        </InputContainer>
      )}
      <Row>
        <Button variation='outline' onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='regular'>
          {isCreating ? <SpinnerBtn /> : 'Add category'}
        </Button>
      </Row>
    </Form>
  );
};

export default NewCategoryForm;
