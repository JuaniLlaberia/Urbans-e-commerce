import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../apiServices/productsService';

export const useGetProducts = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { products, isLoading, error };
};
