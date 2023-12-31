import { css, styled } from 'styled-components';

const Select = styled.select`
  border: none;
  border-radius: var(--raidius-md);
  padding: 0.5rem 0.4rem;
  box-shadow: var(--shadow-light);
  margin-bottom: 5px;
  ${props =>
    props.height === 'full' &&
    css`
      height: 100%;
      @media (max-width: 450px) {
        width: 100%;
      }
    `}

  background-color: var(--color-white-1);
  color: var(--color-white-6);

  &:focus {
    outline-color: var(--icons-color);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-white-3);
  }
`;

export default Select;
