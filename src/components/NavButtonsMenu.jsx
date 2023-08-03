import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineBuildingStorefront,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NavButtonsMenu = () => {
  const { toggleTheme, theme } = useThemeContext();
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <ButtonIcon size='regular' onClick={() => navigate('/dashboard')}>
        <HiOutlineBuildingStorefront />
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={toggleTheme}>
        {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={() => console.log('Loggin out')}>
        <HiOutlineArrowRightOnRectangle />
      </ButtonIcon>
    </StyledMenu>
  );
};

export default NavButtonsMenu;
