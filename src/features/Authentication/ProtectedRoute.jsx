import { useGetUser } from './useGetUser';
import Spinner from '../../components/Spinner';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StyledScreen = styled.main`
  height: 100vh;
  background-color: var(--color-white-1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <StyledScreen>
        <Spinner />
      </StyledScreen>
    );

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
