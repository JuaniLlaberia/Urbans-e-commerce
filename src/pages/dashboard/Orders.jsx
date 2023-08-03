import Title from '../../components/Title';
import TableOrders from '../../features/Orders/TableOrders';
import Filter from '../../components/Filter';
import Row from '../../components/Row';
import SearchbarOrder from '../../features/Orders/SearchbarOrders';
import { filtersOrders } from '../../utils/filterConsts';

const Orders = () => {
  return (
    <>
      <Title as='h2'>Orders</Title>
      <Row>
        <SearchbarOrder />
      </Row>
      <Row>
        <Filter options={filtersOrders} />
      </Row>
      <TableOrders />
    </>
  );
};

export default Orders;
