import { styled } from 'styled-components';
import banner from '../../brick-wallpaper.jpg';

const StyledBanner = styled.img`
  height: 500px;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  background-position: center;
  object-fit: cover;
`;

const MainBanner = () => {
  return <StyledBanner src={banner} />;
};

export default MainBanner;
