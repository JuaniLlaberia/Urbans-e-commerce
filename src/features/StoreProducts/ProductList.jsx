import { styled } from 'styled-components';

const StyledProductsList = styled.ul`
  margin-top: 25px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  place-items: center;
  row-gap: 1rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1170px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default StyledProductsList;
