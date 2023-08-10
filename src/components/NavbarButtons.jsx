import { styled } from 'styled-components';
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  & svg {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-white-5);
`;

const NavbarButtons = () => {
  return (
    <ButtonsContainer>
      <StyledLink to='/products/saved'>
        <HiOutlineHeart />
      </StyledLink>
      <StyledLink to='/cart'>
        <HiOutlineShoppingCart />
      </StyledLink>
      <HiOutlineMagnifyingGlass />
    </ButtonsContainer>
  );
};

export default NavbarButtons;
