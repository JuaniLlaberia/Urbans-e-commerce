import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import { useGetOrders } from './useGetOrders';
import { OrderRow } from './OrderRow';

const TableOrders = () => {
  const { orders, isLoading, count } = useGetOrders();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='.5fr 1.2fr .7fr .9fr .2fr'>
      <Table.Header>
        <div>Order #</div>
        <div>Address</div>
        <div>Shipment</div>
        <div>Status</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={orders}
        render={order => <OrderRow key={order.id} order={order} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default TableOrders;
