import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../../apiServices/productsService';
import { useParams, useSearchParams } from 'react-router-dom';

export const useGetProductsByCategory = () => {
  const [searchParams] = useSearchParams();
  const { mainCategory } = useParams();

  const subCategory = searchParams.get('subCat') || '';

  const { data: { data: products, count } = {}, isLoading } = useQuery({
    queryFn: () => getProductsByCategory(mainCategory, subCategory),
    queryKey: [`product-category-${mainCategory}`, mainCategory, subCategory],
  });

  return { products, count, isLoading };
};
