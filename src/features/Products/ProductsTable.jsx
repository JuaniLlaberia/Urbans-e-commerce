import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { useGetProducts } from './useGetProducts';
import ProductRow from './ProductRow';
import Pagination from '../../components/Pagination';

const ProductsTable = () => {
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='1.3fr .9fr .9fr 1.3fr .5fr  0.4fr'>
      <Table.Header>
        <div>SKU</div>
        <div>Price</div>
        <div>Color</div>
        <div>Category</div>
        <div>Qty</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={products}
        render={product => <ProductRow key={product.id} product={product} />}
      />
      <Table.Footer>
        <Pagination />
      </Table.Footer>
    </Table>
  );
};

export default ProductsTable;
