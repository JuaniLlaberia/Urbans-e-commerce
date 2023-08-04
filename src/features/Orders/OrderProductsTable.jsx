import Spinner from '../../components/Spinner';
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

const OrderProductsTable = ({ id }) => {
  const { orderProducts, isLoading } = useGetOrderProducts(id);

  if (isLoading) return <Spinner />;

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
