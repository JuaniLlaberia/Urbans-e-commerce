import StyledProductsList from './ProductList';
import ProductItem from './ProductItem';
import { HiOutlineHeart } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledMsg = styled.p`
  color: var(--color-white-5);

  & svg {
    color: #ff3737;
    font-size: 1.25rem;
  }
`;

const SavedProductsList = () => {
  const savedProducts =
    JSON.parse(localStorage.getItem('SAVED_PRODUCTS')) || [];

  console.log(savedProducts);

  if (savedProducts.length < 1)
    return (
      <StyledMsg>
        You can save products that you like here for future orders. Just click
        on the <HiOutlineHeart />.
      </StyledMsg>
    );

  return (
    <StyledProductsList>
      {savedProducts?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </StyledProductsList>
  );
};

export default SavedProductsList;
