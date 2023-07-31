import { styled } from 'styled-components';

const DobleInput = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default DobleInput;
