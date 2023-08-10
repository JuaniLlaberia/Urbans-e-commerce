import { styled } from 'styled-components';

const Empty = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.5rem;

  & h5 {
    font-size: 1.25rem;
    color: var(--color-white-5);
  }
  & p {
    font-size: 0.9rem;
    color: var(--color-white-5);
    opacity: 0.7;
  }
`;

export default Empty;
