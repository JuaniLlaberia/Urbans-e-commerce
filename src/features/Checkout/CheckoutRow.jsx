import RowText from '../../components/RowText';
import Table from '../../components/Table';
import { formatCurrency } from '../../utils/formatCurrency';

const CheckoutRow = ({ product }) => {
  const { name, size, color, quantity, price } = product;

  return (
    <Table.Row>
      <RowText>
        {color} {name}({size}) x {quantity}
      </RowText>
      <RowText>{formatCurrency(price * quantity)}</RowText>
    </Table.Row>
  );
};

export default CheckoutRow;
