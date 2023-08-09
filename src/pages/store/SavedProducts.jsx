import Title from '../../components/Title';
import SavedProductsList from '../../features/StoreProducts/SavedProductsList';

const SavedProducts = () => {
  return (
    <>
      <Title as='h2'>Saved products</Title>
      <SavedProductsList />
    </>
  );
};

export default SavedProducts;
