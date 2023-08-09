import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Sidebar from '../../components/Sidebar';

const Main = styled.main`
  padding: 2rem 14rem;
  background-color: var(--color-white-1);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;

  @media (max-width: 1250px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 800px) {
    width: 100vw;
    padding: 3rem 0.75rem;
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

//Testing git bug

const AppLayout = () => {
  return (
    <StyledLayout>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
};

export default AppLayout;
