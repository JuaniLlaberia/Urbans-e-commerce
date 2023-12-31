import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--icons-color);

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
