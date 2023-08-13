import { useThemeContext } from '../context/ThemeContext';
import { styled } from 'styled-components';

import logoDark from '../dark-world.png';
import logoLight from '../light-world.png';

const Img = styled.img`
  width: 80px;
`;

const Logo = () => {
  const { theme } = useThemeContext();
  return <Img src={theme === 'light' ? logoDark : logoLight} />;
};

export default Logo;
