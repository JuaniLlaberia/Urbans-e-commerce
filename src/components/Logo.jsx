import { useThemeContext } from '../context/ThemeContext';
import logoLight from '../logo-light.png';
import logoDark from '../logo-dark.png';
import { styled } from 'styled-components';

const Img = styled.img`
  width: 110px;
`;

const Logo = () => {
  const { theme } = useThemeContext();
  return <Img src={theme === 'light' ? logoLight : logoDark} />;
};

export default Logo;
