import { styled } from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 450px) {
    justify-content: space-between;
  }
`;

export default Row;
