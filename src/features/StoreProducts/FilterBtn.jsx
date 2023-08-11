import { css, styled } from 'styled-components';

const FilterButton = styled.button`
  background-color: #2b2929;
  color: #f8f5f5;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 100px;
  border: none;
  padding: 0.6rem 1.5rem;
  cursor: pointer;
  ${props =>
    props.width === 'full' &&
    css`
      width: 100%;
    `}
  ${props =>
    props.type === 'second' &&
    css`
      background-color: #faf6f6;
      color: #2b2929;
      border: 1px solid #2b2929;
    `}
    @media (max-width: 500px) {
    width: 100%;
  }
`;

export default FilterButton;
