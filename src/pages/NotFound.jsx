import Link from '../components/Link';
import { styled } from 'styled-components';
import { HiArrowLeft, HiOutlineExclamationTriangle } from 'react-icons/hi2';
import Button from '../components/Button';
import Row from '../components/Row';
import { useNavigate } from 'react-router-dom';

const StyledNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-white-2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundBox = styled.section`
  background-color: var(--color-white-1);
  padding: 1rem 1.25rem;
  border-radius: var(--raidius-md);
  box-shadow: var(--shadow-light);
  width: 35vw;
  min-width: 300px;

  & p {
    color: var(--color-white-4);
    display: flex;
    gap: 0.4rem;
    text-align: justify;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const PageNotFoundTitle = styled.h2`
  color: var(--color-white-5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  & svg {
    color: var(--icons-color);
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound>
      <NotFoundBox>
        <PageNotFoundTitle as='h2'>
          <HiOutlineExclamationTriangle />
          Page not found
        </PageNotFoundTitle>
        <p>
          The page you are looking does not exist, please double check the url
          and search again.
        </p>
        <Row>
          <Button variation='regular' width='full' onClick={() => navigate(-1)}>
            Go back
          </Button>
        </Row>
      </NotFoundBox>
    </StyledNotFound>
  );
};

export default NotFound;
