import Title from '../../components/Title';
import Spinner from '../../components/Spinner';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetProductsByCategory } from '../Products/useGetProductsByCategory';
import ProductItem from './ProductItem';
import StyledProductsList from './ProductList';

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
