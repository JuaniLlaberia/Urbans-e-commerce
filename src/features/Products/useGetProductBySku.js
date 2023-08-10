import { useQuery } from '@tanstack/react-query';
import { getProductBySKU } from '../../apiServices/productsService';
import { useParams } from 'react-router-dom';

export const useGetProductBySku = () => {
  const { productSKU } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['product-sku', productSKU],
    queryFn: () => getProductBySKU(productSKU),
  });

  return { product, isLoading, error };
};
