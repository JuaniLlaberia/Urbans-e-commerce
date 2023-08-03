import { styled } from 'styled-components';

const Input = styled.input`
  border: none;
  border-radius: var(--raidius-md);
  padding: 0.5rem 0.4rem;
  box-shadow: var(--shadow-light);
  /* margin-bottom: 5px; */
  /* max-width: 500px; */

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

  @media (max-width: 450px) {
    &:only-child {
      width: 100%;
    }
  }
`;

export default Input;
