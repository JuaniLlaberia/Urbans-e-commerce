import { styled } from 'styled-components';
import Styles from '../styles/Styles';
import Title from '../components/Title';
import Button from '../components/Button';

const FullPage = styled.main`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: var(--color-white-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Box = styled.div`
  background-color: var(--color-white-2);
  padding: 1rem;
  width: 60vw;
  min-width: 250px;
  border-radius: var(--raidius-md);
  box-shadow: var(--shadow-light);

  & p {
    font-size: 0.9rem;
    margin-top: 10px;
  }
`;

const ErrorBoundryPage = ({ error }) => {
  return (
    <>
      <Styles />
      <FullPage>
        <Box>
          <Title as='h2'>Something went wrong</Title>
          <p>{error.message}</p>
        </Box>
        <Button variation='big' onClick={() => window.location.replace('/')}>
          Try again
        </Button>
      </FullPage>
    </>
  );
};

export default ErrorBoundryPage;
