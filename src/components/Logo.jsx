import { useThemeContext } from '../context/ThemeContext';
import { styled } from 'styled-components';

import logoDark from '../dark-logo.png';
import logoLight from '../light-logo.png';
import { useNavigate } from 'react-router-dom';

const Img = styled.img`
  cursor: pointer;
`;

const Logo = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <Img
      width='95px'
      height='20px'
      onClick={() => navigate('/')}
      alt='Logo'
      src={theme === 'light' ? logoDark : logoLight}
    />
  );
};

export default Logo;
