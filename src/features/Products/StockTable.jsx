import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import StockRow from './StockRow';
import { useGetStock } from './useGetStock';

const ProductDetailsTable = () => {
  const { stock, isLoading, count } = useGetStock();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='1.3fr .9fr .9fr 1.3fr 0.4fr'>
      <Table.Header>
        <div>SKU</div>
        <div>Size</div>
        <div>Qty</div>
        <div>Name</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={stock}
        render={item => (
          <StockRow key={item.id} product={item} variant={true} />
        )}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default ProductDetailsTable;
