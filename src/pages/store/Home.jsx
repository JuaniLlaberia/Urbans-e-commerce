import MainBanner from '../../features/HomePage/MainBanner';
import ProductsPreview from '../../features/HomePage/ProductsPreview';
import ShippingBanner from '../../features/HomePage/ShippingBanner';

const Home = () => {
  return (
    <>
      <ShippingBanner />
      <MainBanner />
      <ProductsPreview />
    </>
  );
};

export default Home;
