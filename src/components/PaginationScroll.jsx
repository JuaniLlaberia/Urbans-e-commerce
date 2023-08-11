import { styled } from 'styled-components';
import Row from '../components/Row';
import { useSearchParams } from 'react-router-dom';
import FilterBtn from '../features/StoreProducts/FilterBtn';

const StylesPagination = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  margin-top: 30px;
`;

const Text = styled.p`
  margin-top: 15px;
  color: var(--color-white-5);
  opacity: 0.75;
  font-size: 0.8rem;
`;

const PaginationScroll = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const crrPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  const pageCount = Math.ceil(count / 12);

  const handleShowMore = () => {
    const next = crrPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  };

  return (
    <StylesPagination>
      {pageCount !== 1 && (
        <Row space='separate'>
          <FilterBtn onClick={handleShowMore} disabled={crrPage === 1}>
            Show prev
          </FilterBtn>
          <FilterBtn onClick={handleShowMore} disabled={crrPage === pageCount}>
            Show next
          </FilterBtn>
        </Row>
      )}
      <Text>
        Viewing {(crrPage - 1) * 12 + 1} to{' '}
        {crrPage === pageCount ? count : crrPage * 12} of {count} products
        available.
      </Text>
    </StylesPagination>
  );
};

export default PaginationScroll;
