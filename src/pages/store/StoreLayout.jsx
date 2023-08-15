import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { styled } from 'styled-components';
import Footer from './Footer';

const Main = styled.main`
  background-color: var(--color-white-1);
  padding: 0.6rem 6rem;
  min-height: 85vh;
  position: relative;

  @media (max-width: 850px) {
    padding: 0.6rem 2.5rem;
  }
`;

const StoreLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default StoreLayout;
