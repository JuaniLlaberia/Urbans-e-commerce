import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { styled } from 'styled-components';
import Footer from './Footer';
import { CartSlide } from '../../features/Cart/CartSlide';

const Main = styled.main`
  background-color: var(--color-white-1);
  padding: 0.6rem 6rem;
  min-height: 85vh;
  position: relative;
  overflow-x: hidden;
`;

const StoreLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <CartSlide />
      <Footer />
    </>
  );
};

export default StoreLayout;
