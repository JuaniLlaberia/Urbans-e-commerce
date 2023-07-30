import { css, styled } from 'styled-components';

const StyledContainer = styled.div`
  ${props =>
    props.type === 'vertical' &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      & label {
        font-size: 0.75rem;
        color: var(--color-white-5);
      }
      & p {
        color: #fa3333;
        font-size: 0.8rem;
      }
    `}
  ${props =>
    props.type === 'horizontal' &&
    css`
      width: 50vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.24rem;

      & label {
        font-size: 1rem;
        color: var(--color-white-5);
      }
      & p {
        color: #fa3333;
        font-size: 0.8rem;
        width: 20vw;
      }
    `}
`;

const InputContainer = ({ label, error, children, type, id }) => {
  return (
    <StyledContainer type={type}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p>{error}</p>}
    </StyledContainer>
  );
};

export default InputContainer;
