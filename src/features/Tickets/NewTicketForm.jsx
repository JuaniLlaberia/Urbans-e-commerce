import { styled } from 'styled-components';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputContainer from '../../components/InputContainer';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Row from '../../components/Row';
import Title from '../../components/Title';
import { useForm } from 'react-hook-form';
import { useCreateTicket } from './useCreateTicket';
import SpinnerBtn from '../../components/SpinnerBtn';

const StyledContainer = styled.div`
  margin-top: 25px;
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
  padding: 0.4rem 0.8rem;
  box-shadow: var(--shadow-light);
  width: 50vw;
  min-width: 325px;
  max-width: 600px;
`;

const NewTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { generateTicket, isCreating } = useCreateTicket();

  const onSubmit = data => {
    generateTicket(
      {
        ...data,
        status: 'New',
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <StyledContainer>
      <Title as='h5'>Complain form</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          label='Order #'
          type='vertical'
          error={errors?.orderNum?.message}
        >
          <Input
            disabled={isCreating}
            type='number'
            {...register('orderNum', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='Full Name'
          type='vertical'
          error={errors?.fullName?.message}
        >
          <Input
            disabled={isCreating}
            type='text'
            {...register('fullName', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='Email Address'
          type='vertical'
          error={errors?.email?.message}
        >
          <Input
            disabled={isCreating}
            type='email'
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='Your problem (max 300 char.)'
          type='vertical'
          error={errors?.complain?.message}
        >
          <Textarea
            disabled={isCreating}
            maxLength={300}
            minLength={20}
            {...register('complain', {
              required: 'This field is required',
              minLength: {
                value: 20,
                message: 'You need to write at least 20 characters',
              },
            })}
          />
        </InputContainer>
        <Row>
          <Button variation='outline' disabled={isCreating} type='reset'>
            Cancel
          </Button>
          <Button disabled={isCreating} variation='regular' width='full'>
            {isCreating ? <SpinnerBtn /> : 'Submit'}
          </Button>
        </Row>
      </Form>
    </StyledContainer>
  );
};

export default NewTicketForm;
