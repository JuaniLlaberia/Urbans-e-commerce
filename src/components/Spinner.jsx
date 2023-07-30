import { ClipLoader } from 'react-spinners';
import { styled } from 'styled-components';

const SpinnerContainer = styled.div`
  width: 100%;
  min-width: 250px;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <ClipLoader size={45} color='#6366f1' />
    </SpinnerContainer>
  );
};

export default Spinner;
