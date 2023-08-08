import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../apiServices/productsService';
import { useParams } from 'react-router-dom';

export const useGetProduct = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  });

  return { product, isLoading, error };
};
