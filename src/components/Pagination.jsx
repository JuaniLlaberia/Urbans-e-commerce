import { styled } from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../utils/constants';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 0.8rem;
  margin-left: 0.8rem;
  color: var(--color-white-5);

  & span {
    font-weight: 600;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
  color: var(--color-white-5);
  @media (max-width: 500px) {
    gap: 0.2rem;
  }
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: var(--color-white-5);
  border: none;
  border-radius: var(--raidius-sm);
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem;
  transition: all 0.3s;

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 0.8rem;
    width: 0.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-white-2);
    color: var(--color-white-5);
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const crrPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / pageSize);

  const goNext = () => {
    const next = crrPage === pageCount ? crrPage : crrPage + 1;

    searchParams.set('page', next);
    setSearchParams(searchParams);
  };

  const goPrev = () => {
    const prev = crrPage === 1 ? crrPage : crrPage - 1;

    searchParams.set('page', prev);
    setSearchParams(searchParams);
  };

  return (
    <StyledPagination>
      {count ? (
        <P>
          Showing <span>{(crrPage - 1) * pageSize + 1}</span> to{' '}
          <span>{crrPage === pageCount ? count : crrPage * pageSize}</span> of{' '}
          <span>{count}</span> results
        </P>
      ) : (
        <P>Showing 0 to 0 of 0 results</P>
      )}
      <Buttons>
        <PaginationButton
          aria-label='previous page'
          onClick={goPrev}
          disabled={crrPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          aria-label='next page'
          onClick={goNext}
          disabled={crrPage === pageCount || !count}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
