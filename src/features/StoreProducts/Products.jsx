import Title from '../../components/Title';
import Top from '../../components/Top';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetProductsByCategory } from '../Products/useGetProductsByCategory';
import ProductItem from './ProductItem';
import StyledProductsList from './ProductList';
import PaginationScroll from '../../components/PaginationScroll';
import { FilterSorts } from './FilterSorts';
import ProductListSkeleton from './ProductListSkeleton';

const Products = () => {
  const { mainCategory } = useParams();
  const [searchParams] = useSearchParams();
  const { products, count, isLoading } = useGetProductsByCategory();

  const subCategory = searchParams.get('subCat');

  return (
    <>
      <Top>
        <Title as='h2'>
          {subCategory
            ? `${mainCategory}/${subCategory}`
            : `All ${mainCategory}`}
          <span> ({count} products)</span>
        </Title>
        <FilterSorts />
      </Top>
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <StyledProductsList>
          {products?.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </StyledProductsList>
      )}
      <PaginationScroll count={count} />
    </>
  );
};

export default Products;
