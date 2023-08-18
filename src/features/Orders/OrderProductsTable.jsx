import { useGetOrderProducts } from './useGetOrderProducts';
import Title from '../../components/Title';
import ProductItem from './ProductItem';
import { styled } from 'styled-components';

const StyledList = styled.ul`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  list-style: none;
`;

const LoadingSkeleton = styled.div`
  background-color: #9c9797;
  border-radius: var(--raidius-md);
  height: 125px;
  margin-bottom: 10px;

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: hsl(0, 0%, 72.54901960784314%);
    }
  }
`;

const OrderProductsTable = ({ id }) => {
  const { orderProducts, isLoading } = useGetOrderProducts(id);

  if (isLoading)
    return (
      <>
        <LoadingSkeleton />
        <LoadingSkeleton />
      </>
    );

  return (
    <>
      <Title as='h3'>Order products</Title>
      <StyledList>
        {orderProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </StyledList>
    </>
  );
};

export default OrderProductsTable;
