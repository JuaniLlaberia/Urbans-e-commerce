import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledDropDown = styled.div`
  position: relative;
`;

const StyledOpener = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  color: var(--color-white-5);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--icons-color);
  }
`;

const StyledItem = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;

  & svg {
    color: var(--icons-color);
  }
`;

const StyledMenu = styled.ul`
  background-color: var(--color-white-3);
  padding: 0.25rem 0.4rem;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
  position: absolute;
  top: 100%;
  right: 10%;
  z-index: 100;
  display: flex;
  gap: 0.4rem;
  transition: all 0.3s ease-in-out;
`;

const DropDownContext = createContext();

const DropDownMenu = ({ children }) => {
  const [openId, setOpenId] = useState('');

  const close = () => setOpenId('');
  const open = id => setOpenId(id);

  return (
    <DropDownContext.Provider value={{ open, close, openId }}>
      <StyledDropDown>{children}</StyledDropDown>
    </DropDownContext.Provider>
  );
};

const Opener = ({ id }) => {
  const { open } = useContext(DropDownContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <StyledOpener
        onClick={() => {
          open(id);
        }}
      >
        <HiOutlineCog8Tooth />
      </StyledOpener>
    </div>
  );
};

const Menu = ({ children, id }) => {
  const { openId, close } = useContext(DropDownContext);

  //Create a ref
  const ref = useRef();

  useEffect(() => {
    //If the current ref doesnt contain the target we run
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [close]);

  if (id !== openId) return null;

  return <StyledMenu ref={ref}>{children}</StyledMenu>;
};

const Item = ({ children, onClick }) => {
  const { close } = useContext(DropDownContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li style={{ listStyle: 'none' }}>
      <StyledItem onClick={handleClick}>
        <span>{children}</span>
      </StyledItem>
    </li>
  );
};

DropDownMenu.Opener = Opener;
DropDownMenu.Menu = Menu;
DropDownMenu.Item = Item;

export default DropDownMenu;
