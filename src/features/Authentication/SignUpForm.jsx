import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import SpinnerBtn from '../../components/SpinnerBtn';
import Row from '../../components/Row';
import Button from '../../components/Button';
import { useCreateUser } from './useCreateUser';

const StyledContainer = styled.div`
  margin-top: 25px;
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
  padding: 0.4rem 0.8rem;
  box-shadow: var(--shadow-light);
`;

const SignUpForm = () => {
  const { signUp, isLoading } = useCreateUser();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    const newUser = { email, password };

    signUp(newUser, {
      onSuccess: () => reset(),
    });
  };

  return (
    <StyledContainer onSubmit={handleSubmit(onSubmit)}>
      <Form>
        <InputContainer
          label='Email address'
          id='email'
          type='vertical'
          error={errors?.email?.message}
        >
          <Input
            disabled={isLoading}
            id='email'
            type='email'
            {...register('email', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='Password'
          id='password'
          type='vertical'
          error={errors?.password?.message}
        >
          <Input
            disabled={isLoading}
            id='password'
            type='password'
            {...register('password', {
              required: 'This field is required',
            })}
          />
        </InputContainer>
        <InputContainer
          label='Confirm password'
          id='confPassword'
          type='vertical'
          error={errors?.confPassword?.message}
        >
          <Input
            disabled={isLoading}
            id='confPassword'
            type='password'
            {...register('confPassword', {
              required: 'This field is required',
              validate: value =>
                value === getValues().password || 'Passwords need to match',
            })}
          />
        </InputContainer>
        <Row>
          <Button variation='outline' aria-label='cancel' type='reset'>
            Cancel
          </Button>
          <Button
            variation='regular'
            aria-label='create new account'
            width='full'
            disabled={isLoading}
          >
            {isLoading ? <SpinnerBtn /> : 'Create account'}
          </Button>
        </Row>
      </Form>
    </StyledContainer>
  );
};

export default SignUpForm;
