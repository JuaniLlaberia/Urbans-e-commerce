import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { useGetProducts } from './useGetProducts';
import ProductRow from './ProductRow';
import Pagination from '../../components/Pagination';

const ProductsTable = () => {
  const { products, isLoading, count } = useGetProducts();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='1.4fr .9fr .9fr 1.5fr .4fr'>
      <Table.Header>
        <div>SKU</div>
        <div>Price</div>
        <div>Color</div>
        <div>Category</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={products}
        render={product => <ProductRow key={product.id} product={product} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default ProductsTable;
