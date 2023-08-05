import { css, styled } from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 450px) {
    justify-content: space-between;
  }

  ${props =>
    props.space === 'separate' &&
    css`
      justify-content: space-between;
    `}
`;

export default Row;
