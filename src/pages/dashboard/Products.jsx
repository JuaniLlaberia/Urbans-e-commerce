import Row from '../../components/Row';
import Title from '../../components/Title';
import AddProduct from '../../features/Products/AddProduct';
import ProductsTable from '../../features/Products/ProductsTable';

const Procuts = () => {
  return (
    <>
      <Title as='h2'>Products</Title>
      <Row>
        <AddProduct />
      </Row>
      <ProductsTable />
    </>
  );
};

export default Procuts;
