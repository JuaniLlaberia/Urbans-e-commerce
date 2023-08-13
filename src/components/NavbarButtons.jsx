import { styled } from 'styled-components';
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartLength } from '../features/Cart/cartSlice';

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
  position: relative;
`;

const StyledNumber = styled.p`
  position: absolute;
  top: -7.5px;
  right: -5px;
  background-color: var(--icons-color);
  color: #f8f4f4;
  font-weight: 600;
  font-size: 0.8rem;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const NavbarButtons = () => {
  const cartLength = useSelector(getCartLength);
  return (
    <ButtonsContainer>
      <StyledLink to='/products/saved'>
        <HiOutlineHeart />
      </StyledLink>
      <StyledLink to='/cart'>
        <HiOutlineShoppingCart />
        {cartLength > 0 && <StyledNumber>{cartLength}</StyledNumber>}
      </StyledLink>
      <HiOutlineMagnifyingGlass />
    </ButtonsContainer>
  );
};

export default NavbarButtons;
