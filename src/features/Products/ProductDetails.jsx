import { useGetProduct } from './useGetProduct';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Row from '../../components/Row';
import { styled } from 'styled-components';
import Link from '../../components/Link';
import { HiArrowLeft, HiOutlineExclamationTriangle } from 'react-icons/hi2';

const StyledProductDetailHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const Box = styled.div`
  padding: 1rem 1.25rem;
  border: var(--border-sm);
  border-radius: var(--raidius-md);
  margin: 10px 30px;

  max-width: 700px;
`;
const EmptyDetail = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & p {
    font-size: 1.25rem;
    color: var(--color-white-6);
  }

  & svg {
    color: var(--icons-color);
    font-size: 1.5rem;
  }
`;

const ProductDetails = () => {
  const { product, isLoading } = useGetProduct();

  if (isLoading) return <Spinner />;
  if (!product)
    return (
      <EmptyDetail>
        <HiOutlineExclamationTriangle />
        <p>No results for this product id</p>
      </EmptyDetail>
    );

  const {
    name,
    SKU,
    mainCategory,
    subCategory,
    quantity,
    price,
    size,
    description,
    img,
  } = product;

  console.log(product);

  return (
    <>
      <StyledProductDetailHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
          <Title as='h4'>{name}</Title>
          <span style={{ color: 'gray', fontSize: '1rem' }}>({SKU})</span>
        </div>
        <Link to='/products'>
          <HiArrowLeft />
          Go back
        </Link>
      </StyledProductDetailHeader>
      <Box></Box>
      <Row>
        <Button type='regular'>Edit</Button>
      </Row>
    </>
  );
};

export default ProductDetails;
