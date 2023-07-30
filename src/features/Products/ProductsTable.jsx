import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { useGetProducts } from './useGetProducts';
import ProductRow from './ProductRow';

const ProductsTable = () => {
  const { products, isLoading } = useGetProducts();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='2fr 1fr 1fr 1fr 1fr'>
      <Table.Header>
        {/* <div></div> */}
        <div>Name</div>
        <div>Price</div>
        <div>Discount</div>
        <div>Main</div>
        <div>Sub</div>
      </Table.Header>
      <Table.Body
        data={products}
        render={product => <ProductRow key={product.id} product={product} />}
      />
    </Table>
  );
};

export default ProductsTable;
