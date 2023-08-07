import { styled } from 'styled-components';
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  & svg {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const NavbarButtons = () => {
  return (
    <ButtonsContainer>
      <HiOutlineHeart />
      <HiOutlineShoppingCart />
      <HiOutlineMagnifyingGlass />
    </ButtonsContainer>
  );
};

export default NavbarButtons;
