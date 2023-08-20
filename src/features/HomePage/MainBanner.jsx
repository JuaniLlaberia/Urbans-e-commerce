import { styled } from 'styled-components';

const StyledBanner = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 500px;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: var(--color-white-5);
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 1.5rem 2rem;
  color: var(--color-white-2);
`;

const MainBanner = () => {
  return (
    <StyledBanner>
      <Title>We're Urban's Clothing</Title>
    </StyledBanner>
  );
};

export default MainBanner;
