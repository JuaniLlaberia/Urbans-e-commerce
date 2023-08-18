import Table from '../../components/Table';
import CheckoutRow from './CheckoutRow';
import { formatCurrency } from '../../utils/formatCurrency';
import { styled } from 'styled-components';

const PriceSummary = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductsSummary = ({
  totalPrice,
  cartProducts,
  shippingCosts,
  shippingType,
}) => {
  return (
    <Table columns='1fr 0.25fr'>
      <Table.Header>
        <div>Products</div>
        <div>Price</div>
      </Table.Header>
      <Table.Body
        data={cartProducts}
        render={product => <CheckoutRow key={product.id} product={product} />}
      />
      <Table.Footer as='div'>
        <PriceSummary>
          <span>Sub Total</span> <span>{formatCurrency(totalPrice)}</span>
        </PriceSummary>
      </Table.Footer>
      <Table.Footer as='div'>
        <PriceSummary>
          <span>Shipping({shippingType})</span>{' '}
          <span>{formatCurrency(shippingCosts)}</span>
        </PriceSummary>
      </Table.Footer>
      <Table.Footer>
        <PriceSummary>
          <span>Total</span>{' '}
          <span>{formatCurrency(totalPrice + shippingCosts)}</span>
        </PriceSummary>
      </Table.Footer>
    </Table>
  );
};

export default ProductsSummary;
