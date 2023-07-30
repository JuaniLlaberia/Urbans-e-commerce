import { css, styled } from 'styled-components';

const Button = styled.button`
  background-color: var(--icons-color);
  color: #fff;
  font-weight: 600;
  border-radius: var(--raidius-sm);
  border: none;

  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background-color: var(--icons-color-hover);
  }

  ${props =>
    props.type === 'regular' &&
    css`
      padding: 0.5rem 1.25rem;
      min-width: 8rem;
    `}
  ${props =>
    props.type === 'small' &&
    css`
      padding: 0.4rem 0.9rem;
      font-size: 0.75rem;
      font-weight: 500;
      min-width: 4rem;
    `}
  ${props =>
    props.type === 'big' &&
    css`
      padding: 0.8rem 2rem;
      font-size: 1rem;
      min-width: 10rem;
    `}
  ${props =>
    props.type === 'alert' &&
    css`
      padding: 0.5rem 1.25rem;
      background-color: #ee3d3d;

      &:hover {
        background-color: #f44e4e;
      }
    `}
  ${props =>
    props.type === 'outline' &&
    css`
      padding: 0.5rem 1.25rem;
      border: 1px solid var(--color-white-5);
      background-color: transparent;
      color: var(--color-white-5);

      &:hover {
        background-color: var(--color-white-2);
      }
    `}
`;

export default Button;
