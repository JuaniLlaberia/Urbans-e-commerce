import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationCircle,
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineServerStack,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineUser,
} from 'react-icons/hi2';
import NavButtonsMenu from './NavButtonsMenu';
import AnimatedOpenBtn from './AnimatedOpenBtn';
import { useState } from 'react';
import Overlay from './Overlay';

const StyledSidebar = styled.aside`
  position: relative;

  background-color: var(--color-white-2);
  grid-row: 1/ -1;
  padding: 2.5rem 1rem;
  border-right: var(--border-sm);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.4s ease-in-out;

  @media (max-width: 800px) {
    transform: translateX(-190px);
    position: fixed;
    height: 100vh;

    &.open {
      transform: translateX(0);
    }
  }

  z-index: 2;
`;

const NavList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const SidebarItem = styled(NavLink)`
  &,
  &:visited {
    color: var(--color-white-5);
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.4rem 1rem;
    border-radius: var(--raidius-md);

    transition: all 0.1s ease-in;
  }

  &.active,
  &:hover {
    background-color: var(--color-white-3-light);
    color: var(--color-white-6);
  }

  & span {
    font-size: 1rem;
  }

  & svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--color-white-5);
    transition: all 0.3s;
  }
  &.active svg,
  &:hover svg {
    color: var(--icons-color);
  }
`;

const Separator = styled.h6`
  color: var(--color-white-5);
  margin: 0.2rem 0 0.2rem 0.7rem;
  opacity: 0.9;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 191.5px;
  padding-top: 5px;

  @media (min-width: 701px) {
    display: none;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeOnClick = () => setIsOpen(false);

  return (
    <>
      <StyledSidebar className={isOpen ? 'open' : ''}>
        <NavList>
          <Separator>HOME</Separator>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/dashboard'>
              <HiOutlineHome />
              <span>Dashboard</span>
            </SidebarItem>
          </li>
          <Separator>STORE</Separator>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/products'>
              <HiOutlineShoppingBag />
              <span>Products</span>
            </SidebarItem>
          </li>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/stock'>
              <HiOutlineServerStack />
              <span>Stock</span>
            </SidebarItem>
          </li>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/categories'>
              <HiOutlineHashtag />
              <span>Categories</span>
            </SidebarItem>
          </li>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/discounts'>
              <HiOutlineTag />
              <span>Discounts</span>
            </SidebarItem>
          </li>
          <Separator>SALES</Separator>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/orders'>
              <HiOutlineClipboardDocumentList />
              <span>Orders</span>
            </SidebarItem>
          </li>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/tickets'>
              <HiOutlineExclamationCircle />
              <span>Tickets</span>
            </SidebarItem>
          </li>
          <Separator>EMPLOYEES</Separator>
          <li onClick={closeOnClick}>
            <SidebarItem to='admin/new-user'>
              <HiOutlineUser />
              <span>New Admin</span>
            </SidebarItem>
          </li>
        </NavList>
        <NavButtonsMenu />
        <ButtonContainer>
          <AnimatedOpenBtn
            isOpen={isOpen}
            onClick={() => setIsOpen(prev => !prev)}
          />
        </ButtonContainer>
      </StyledSidebar>
      {isOpen && <Overlay onClick={closeOnClick} />}
    </>
  );
};

export default Sidebar;
