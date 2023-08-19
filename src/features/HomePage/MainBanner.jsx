import { styled } from 'styled-components';

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
  return (
    <StyledBanner src='https://geuzjkdzkblmryfdmtpi.supabase.co/storage/v1/object/public/products-img/brick-wallpaper.jpg' />
  );
};

export default MainBanner;
