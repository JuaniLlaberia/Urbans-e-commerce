import { styled } from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
`;

const P = styled.p`
  font-size: 0.8rem;
  margin-left: 0.8rem;

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
  @media (max-width: 500px) {
    gap: 0.2rem;
  }
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: var(--color-white-7);
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

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Pagination = () => {
  return (
    <StyledPagination>
      <P>
        Showing <span>1</span> to <span>5</span> of <span>20</span> results
      </P>
      <Buttons>
        <PaginationButton>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
