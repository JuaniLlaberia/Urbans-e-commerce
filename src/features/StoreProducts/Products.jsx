import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetProductsByCategory } from '../Products/useGetProductsByCategory';
import { styled } from 'styled-components';
import ProductItem from './ProductItem';

//Try to make it cleanner
const StyledProductsList = styled.ul`
  margin-top: 25px;
  margin-left: 12.5px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  row-gap: 1rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1170px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Products = () => {
  const { mainCategory } = useParams();
  const [searchParams] = useSearchParams();
  const { products, count, isLoading } = useGetProductsByCategory();

  const subCategory = searchParams.get('subCat');

  if (isLoading) return <Spinner />;

  return (
    <>
      <Title as='h2'>
        {subCategory ? `${mainCategory}/${subCategory}` : `All ${mainCategory}`}
        <span> ({count} products)</span>
      </Title>

      <StyledProductsList>
        {products?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </StyledProductsList>
    </>
  );
};

export default Products;
