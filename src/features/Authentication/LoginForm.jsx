import { useState } from 'react';
import Form from '../../components/Form';
import InputContainer from '../../components/InputContainer';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Row from '../../components/Row';
import SpinnerBtn from '../../components/SpinnerBtn';
import Button from '../../components/Button';
import { useLogin } from './useLogin';

const LoginForm = () => {
  const { login, isLogging } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title as='h3'>Sign In</Title>
      <InputContainer type='vertical' label='Email address' id='loginEmail'>
        <Input
          disabled={isLogging}
          id='loginEmail'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer type='vertical' label='Password' id='loginPassword'>
        <Input
          disabled={isLogging}
          id='loginPassword'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer>
      <Row>
        <Button width='full' type='regular' disabled={isLogging}>
          {isLogging ? <SpinnerBtn /> : 'Login'}
        </Button>
      </Row>
    </Form>
  );
};

export default LoginForm;
