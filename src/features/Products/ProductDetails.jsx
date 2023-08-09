import Title from '../../components/Title';
import { useParams } from 'react-router-dom';
import Link from '../../components/Link';
import { HiArrowLeft } from 'react-icons/hi2';
import Top from '../../components/Top';
import ProductDetailsTable from './ProductDetailsTable';

const ProductDetails = () => {
  const { productName } = useParams();

  return (
    <>
      <Top>
        <Title as='h3'>All '{productName}' colors</Title>
        <Link to='/admin/products'>
          <HiArrowLeft />
          Go back
        </Link>
      </Top>
      <ProductDetailsTable />
    </>
  );
};

export default ProductDetails;
