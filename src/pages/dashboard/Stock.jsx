import OrderBy from '../../components/OrderBy';
import Row from '../../components/Row';
import Title from '../../components/Title';
import AddStock from '../../features/Products/AddStock';
import StockTable from '../../features/Products/StockTable';
import Top from '../../components/Top';
import { orderStock } from '../../utils/orderConsts';

const Stock = () => {
  return (
    <>
      <Top>
        <Title as='h2'>Stock</Title>
      </Top>
      <Row>
        <OrderBy options={orderStock} variable='orderStock' />
        <AddStock />
      </Row>
      <StockTable />
    </>
  );
};

export default Stock;
