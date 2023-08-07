import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { styled } from 'styled-components';

const Main = styled.main`
  background-color: var(--color-white-1);
  padding: 0.6rem 6rem;
  height: 100vh;

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
    </>
  );
};

export default StoreLayout;
