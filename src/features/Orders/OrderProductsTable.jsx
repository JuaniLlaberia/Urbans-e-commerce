import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { useGetOrderProducts } from './useGetOrderProducts';
import OrderProductsRow from './OrderProductsRow';
import Title from '../../components/Title';

const OrderProductsTable = ({ id }) => {
  const { orderProducts, isLoading } = useGetOrderProducts(id);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Title as='h3'>Order products</Title>
      <Table columns='1.2fr 1fr .3fr .3fr .6fr'>
        <Table.Body
          data={orderProducts}
          render={product => (
            <OrderProductsRow key={product.id} product={product} />
          )}
        />
      </Table>
    </>
  );
};

export default OrderProductsTable;
