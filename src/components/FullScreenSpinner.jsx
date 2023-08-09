import { styled } from 'styled-components';
import Spinner from './Spinner';

const StyledScreen = styled.main`
  height: 100vh;
  background-color: var(--color-white-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullScreenSpinner = () => {
  return (
    <StyledScreen>
      <Spinner />
    </StyledScreen>
  );
};

export default FullScreenSpinner;
