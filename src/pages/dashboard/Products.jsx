import OrderBy from '../../components/OrderBy';
import Row from '../../components/Row';
import Title from '../../components/Title';
import AddProduct from '../../features/Products/AddProduct';
import ProductsTable from '../../features/Products/ProductsTable';
import SearchbarProducts from '../../features/Products/SearchbarProducts';
import Top from '../../components/Top';
import { orderProducts } from '../../utils/orderConsts';

const Procuts = () => {
  return (
    <>
      <Top>
        <Title as='h2'>Products</Title>
        <OrderBy options={orderProducts} />
      </Top>
      <Row>
        <SearchbarProducts />
        <AddProduct />
      </Row>
      <ProductsTable />
    </>
  );
};

export default Procuts;
