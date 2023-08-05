import { styled } from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi2';

import Link from '../components/Link';
import LoginForm from '../features/Authentication/LoginForm';

const StyledLogin = styled.main`
  height: 100vh;
  background-color: var(--color-white-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
  padding: 0.4rem 0.8rem;
  box-shadow: var(--shadow-light);
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledContainer>
        <LoginForm />
      </StyledContainer>
      <Link to='/' style={{ position: 'absolute', top: '2.5%', left: '2.5%' }}>
        <HiArrowLeft /> Go back
      </Link>
    </StyledLogin>
  );
};

export default Login;
