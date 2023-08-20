import { styled } from 'styled-components';
import { useGetProductsByCategory } from '../Products/useGetProductsByCategory';
import ProductListSkeletonHorizontal from './SkeletonLoaderHorizontal';
import HorizontalProductItem from './HorizontalProductItem';

const StyledHorizontalCatalog = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 1rem 0 0.5rem 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-white-3);
    border-radius: 1000px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-white-4);
  }
`;

export const HorizontalCatalog = ({ category }) => {
  const { products: previewProducts, isLoading } = useGetProductsByCategory(
    category,
    6
  );

  if (isLoading) return <ProductListSkeletonHorizontal />;

  return (
    <>
      <StyledHorizontalCatalog>
        {previewProducts.map(product => (
          <HorizontalProductItem product={product} key={product.id} />
        ))}
      </StyledHorizontalCatalog>
    </>
  );
};
