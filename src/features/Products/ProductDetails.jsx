import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import Link from '../../components/Link';
import { HiArrowLeft } from 'react-icons/hi2';
import Top from '../../components/Top';
import Row from '../../components/Row';
import OrderBy from '../../components/OrderBy';
import { orderProducts } from '../../utils/orderConsts';
import ProductDetailsTable from './ProductDetailsTable';

const ProductDetails = () => {
  const { productName } = useParams();

  return (
    <>
      <Top>
        <Title as='h3'>All '{productName}' items</Title>
        <Link to='/admin/products'>
          <HiArrowLeft />
          Go back
        </Link>
      </Top>
      <Row>
        <OrderBy options={orderProducts} />
      </Row>
      <ProductDetailsTable />
    </>
  );
};

export default ProductDetails;
