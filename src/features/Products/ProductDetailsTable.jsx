import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import ProductRow from './ProductRow';
import { useGetVariants } from './useGetVariants';

const ProductDetailsTable = () => {
  const { variants, isLoading, count } = useGetVariants();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='1.3fr .9fr .9fr 1.3fr  0.4fr'>
      <Table.Header>
        <div>SKU</div>
        <div>price</div>
        <div>Color</div>
        <div>Category</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={variants}
        render={variant => (
          <ProductRow key={variant.id} product={variant} variant={true} />
        )}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default ProductDetailsTable;
