import { FilterSorts } from '../../features/StoreProducts/FilterSorts';
import Products from '../../features/StoreProducts/Products';
import { SubCategories } from '../../features/StoreProducts/SubCategories';

const StoreProducts = () => {
  return (
    <>
      <SubCategories />
      {/* <FilterSorts /> */}
      <Products />
    </>
  );
};

export default StoreProducts;
