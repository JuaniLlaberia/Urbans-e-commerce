import { styled } from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi2';

import Link from '../components/Link';
import LoginForm from '../features/Authentication/LoginForm';
import Title from '../components/Title';
import Logo from '../components/Logo';

const StyledLogin = styled.main`
  height: 100vh;
  background-color: var(--color-white-1);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled.div`
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
  padding: 0.4rem 0.8rem;
  box-shadow: var(--shadow-light);
  width: 25vw;
  min-width: 300px;
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledContainer>
        <Title as='h4'>Sign In</Title>
        <LoginForm />
      </StyledContainer>
      <Link to='/' style={{ position: 'absolute', top: '2.5%', left: '2.5%' }}>
        <HiArrowLeft /> Go back
      </Link>
    </StyledLogin>
  );
};

export default Login;
