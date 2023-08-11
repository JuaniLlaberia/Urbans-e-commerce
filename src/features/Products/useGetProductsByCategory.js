import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../../apiServices/productsService';
import { useParams, useSearchParams } from 'react-router-dom';

export const useGetProductsByCategory = () => {
  const [searchParams] = useSearchParams();
  const { mainCategory } = useParams();

  const subCategory = searchParams.get('subCat') || '';

  const sorting = searchParams.get('sortBy') || 'created_at-asc';
  const filterColor = searchParams.get('filterColor') || 'All';
  const filterPrice = searchParams.get('filterPrice') || 'All';

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const { data: { data: products, count } = {}, isLoading } = useQuery({
    queryFn: () =>
      getProductsByCategory(
        mainCategory,
        subCategory,
        filterColor,
        filterPrice,
        sorting
        // page,
      ),
    queryKey: [
      `product-category-${mainCategory}`,
      mainCategory,
      subCategory,
      filterColor,
      filterPrice,
      sorting,
      // page,
    ],
    keepPreviousData: true,
  });

  return { products, count, isLoading };
};
