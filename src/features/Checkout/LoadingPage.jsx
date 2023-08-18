import { styled } from 'styled-components';
import { SyncLoader } from 'react-spinners';

const StyledPage = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;
  background-color: var(--color-white-2);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 100;
`;

const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

const LoadingPage = () => {
  return (
    <StyledPage>
      <Text>We are processing your order</Text>
      <Text>You are almost there</Text>
      <br />
      <SyncLoader color='var(--icons-color)' />
    </StyledPage>
  );
};

export default LoadingPage;
