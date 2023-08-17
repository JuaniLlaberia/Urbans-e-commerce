import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import { getCart } from '../Cart/cartSlice';
import CheckoutRow from './CheckoutRow';
import { formatCurrency } from '../../utils/formatCurrency';
import { styled } from 'styled-components';

const PriceSummary = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & span {
    font-weight: 600;
  }
`;

const ProductsSummary = () => {
  const products = useSelector(getCart);

  const totalPrice = products.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  return (
    <Table columns='1fr 0.25fr'>
      <Table.Header>
        <div>Products</div>
        <div>Price</div>
      </Table.Header>
      <Table.Body
        data={products}
        render={product => <CheckoutRow key={product.id} product={product} />}
      />
      <Table.Footer>
        <PriceSummary>
          <span>Sub Total</span> <span>{formatCurrency(totalPrice)}</span>
        </PriceSummary>
      </Table.Footer>
    </Table>
  );
};

export default ProductsSummary;
