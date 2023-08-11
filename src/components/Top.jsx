import { styled } from 'styled-components';

const Top = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 25px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export default Top;
