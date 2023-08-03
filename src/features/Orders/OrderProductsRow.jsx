import Table from '../../components/Table';
import RowText from '../../components/RowText';
import { formatCurrency } from '../../utils/formatCurrency';
import { styled } from 'styled-components';

const Img = styled.img`
  width: 5rem;
  min-width: 60px;
  max-width: 110px;
  border-radius: var(--raidius-sm);
  border: var(--border-sm);
`;

const OrderProductsRow = ({ product }) => {
  const { product: productInfo, quantity } = product;

  return (
    <Table.Row>
      <Img src={productInfo.img} />
      <RowText>{productInfo.SKU}</RowText>
      <RowText>{productInfo.size}</RowText>
      <RowText>{quantity}</RowText>
      <RowText>{formatCurrency(productInfo.price * quantity)}</RowText>
    </Table.Row>
  );
};

export default OrderProductsRow;
