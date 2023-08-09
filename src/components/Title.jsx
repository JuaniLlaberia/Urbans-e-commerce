import { styled, css } from 'styled-components';

const Title = styled.h1`
  color: var(--color-white-6);

  ${props =>
    props.as === 'h1' &&
    css`
      font-weight: 600;
      font-size: 2.5rem;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-weight: 600;
      font-size: 1.75rem;
      & span {
        font-size: 0.9rem;
        color: var(--color-white-5);
        opacity: 0.8;
      }
    `}
  ${props =>
    props.as === 'h3' &&
    css`
      font-weight: 500;
      font-size: 1rem;
    `}
  ${props =>
    props.as === 'h4' &&
    css`
      font-weight: 600;
      font-size: 1.5rem;
      text-align: center;
    `}
  ${props =>
    props.as === 'p' &&
    css`
      font-weight: 400;
      font-size: 0.85rem;
    `}
  line-height: 1.4;
`;

export default Title;
