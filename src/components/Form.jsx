import { css, styled } from 'styled-components';

const Form = styled.form`
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;

  min-width: 40vw;

  ${props =>
    props.type === 'modal' &&
    css`
      border: var(--border-sm);
      border-radius: var(--raidius-md);
      margin-top: 15px;
      margin-bottom: 25px;
      /* box-shadow: var(--shadow-light); */
      width: 30vw;
    `}
`;

export default Form;
