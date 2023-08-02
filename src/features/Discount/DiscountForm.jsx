import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Row from '../../components/Row';
import Button from '../../components/Button';
import SpinnerBtn from '../../components/SpinnerBtn';
import Title from '../../components/Title';
import DobleInput from '../../components/DobleInput';
import { useForm } from 'react-hook-form';
import { useCreateDiscount } from './useCreateDiscount';
import { useEditDiscount } from './useEditDiscount';

const DiscountForm = ({ onCloseModal, discountToEdit = {} }) => {
  //Checking if the form is being use for editing or creating a discount
  const { id: editId, ...editDiscount } = discountToEdit;
  const isEditing = editId ? true : false;

  const { createDiscount, isCreating } = useCreateDiscount();
  const { editDiscount: editDiscountFn, isUpdating } = useEditDiscount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing ? editDiscount : {},
  });

  const onSubmit = ({ code, amount, validUntil }) => {
    if (isEditing) {
      editDiscountFn(
        {
          id: editId,
          editedDiscount: {
            code,
            amount,
            validUntil: new Date(validUntil).toISOString(),
          },
        },
        {
          onSuccess: () => {
            onCloseModal();
          },
        }
      );
    } else {
      createDiscount(
        {
          code,
          amount,
          validUntil: new Date(validUntil).toISOString(),
        },
        {
          onSuccess: () => {
            onCloseModal();
          },
        }
      );
    }
  };

  const isLoading = isUpdating || isCreating;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h3'>{isEditing ? 'Edit' : 'Create'} discount code</Title>
      <InputContainer
        type='vertical'
        label='Code'
        error={errors?.code?.message}
      >
        <Input
          disabled={isLoading}
          type='text'
          {...register('code', {
            required: 'This field is required',
          })}
        />
      </InputContainer>
      <DobleInput>
        <InputContainer
          type='vertical'
          label='Amount'
          error={errors?.amount?.message}
        >
          <Input
            disabled={isLoading}
            type='number'
            {...register('amount', {
              required: 'This field is required',
              min: {
                message: 'Minimum 1 (%)',
                value: 1,
              },
              max: {
                message: 'Maximum 99 (%)',
                value: 99,
              },
            })}
          />
        </InputContainer>
        <InputContainer
          type='vertical'
          label='Expire date'
          error={errors?.validUntil?.message}
        >
          <Input
            disabled={isLoading}
            type='datetime-local'
            {...register('validUntil', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
      </DobleInput>
      <Row>
        <Button type='outline' onClick={onCloseModal} disabled={isCreating}>
          Cancel
        </Button>
        <Button type='regular'>
          {isLoading ? (
            <SpinnerBtn />
          ) : (
            `${isEditing ? 'Update' : 'Add'} discount`
          )}
        </Button>
      </Row>
    </Form>
  );
};

export default DiscountForm;
