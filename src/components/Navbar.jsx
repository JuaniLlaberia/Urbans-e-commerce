import { styled } from 'styled-components';
import NavbarButtons from './NavbarButtons';
import Logo from './Logo';
import NavbarCategories from './NavbarCategories';
import { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';

const StyledNav = styled.nav`
  height: 50px;
  width: 100vw;
  max-width: 100%;
  background-color: var(--color-white-2);
  color: var(--color-white-5);
  border-bottom: var(--border-sm);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;

  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
  }
`;

const BugerContainer = styled.div`
  & svg {
    font-size: 1.5rem;
    color: var(--color-white-5);
  }
  @media (min-width: 850px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <StyledNav>
      <BugerContainer>
        <HiOutlineBars3 onClick={open} style={{ cursor: 'pointer' }} />
      </BugerContainer>
      <Logo />
      <NavbarCategories isOpen={isOpen} closeNav={close} />
      <NavbarButtons />
    </StyledNav>
  );
};

export default Navbar;
