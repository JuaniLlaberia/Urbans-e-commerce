import { css, styled } from 'styled-components';

const StyledButtonIcon = styled.button`
  color: var(--icons-color);
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${props =>
    props.size === 'sm' &&
    css`
      font-size: 1.15rem;
    `}
  ${props =>
    props.size === 'regular' &&
    css`
      font-size: 1.5rem;
    `}
`;

export default StyledButtonIcon;
