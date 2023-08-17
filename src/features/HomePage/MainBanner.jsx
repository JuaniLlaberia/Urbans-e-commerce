import { styled } from 'styled-components';

const StyledBanner = styled.section`
  height: 500px;
  background-color: rebeccapurple;
  width: 100vw;
  max-width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
`;

const MainBanner = () => {
  return <StyledBanner>BIG IMAGE</StyledBanner>;
};

export default MainBanner;
