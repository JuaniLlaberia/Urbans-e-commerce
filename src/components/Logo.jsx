import { useThemeContext } from '../context/ThemeContext';
import { styled } from 'styled-components';

import logoDark from '../dark-logo.png';
import logoLight from '../light-logo.png';
import { useNavigate } from 'react-router-dom';

const Img = styled.img`
  width: 80px;
  cursor: pointer;
`;

const Logo = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <Img
      onClick={() => navigate('/')}
      alt='Logo'
      src={theme === 'light' ? logoDark : logoLight}
    />
  );
};

export default Logo;
