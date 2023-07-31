import { css, styled } from 'styled-components';

const RowText = styled.p`
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 1.4;

  ${props =>
    props.type === 'main' &&
    css`
      font-weight: 500;
    `}

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

export default RowText;
