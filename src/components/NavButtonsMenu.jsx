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
import { useLogout } from '../features/Authentication/useLogout';

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NavButtonsMenu = () => {
  const { toggleTheme, theme } = useThemeContext();
  const { logout, isLoggingOut } = useLogout();
  const navigate = useNavigate();

  return (
    <StyledMenu>
      <ButtonIcon
        size='regular'
        onClick={() => navigate('admin/my-store')}
        disabled={isLoggingOut}
      >
        <HiOutlineBuildingStorefront />
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={toggleTheme} disabled={isLoggingOut}>
        {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
      <ButtonIcon size='regular' onClick={logout} disabled={isLoggingOut}>
        <HiOutlineArrowRightOnRectangle />
      </ButtonIcon>
    </StyledMenu>
  );
};

export default NavButtonsMenu;
