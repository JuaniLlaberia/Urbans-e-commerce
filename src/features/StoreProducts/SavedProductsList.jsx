import StyledProductsList from './ProductList';
import ProductItem from './ProductItem';
import { useSavedContext } from '../../context/SavedContext';
import Empty from '../../components/EmptyMsg';

const SavedProductsList = () => {
  const { savedProducts } = useSavedContext();

  if (savedProducts.length < 1)
    return (
      <Empty>
        <h5>No products saved</h5>
        <p>There are no products saved, you can add as many as you want</p>
      </Empty>
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
