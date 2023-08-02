import { useQuery } from '@tanstack/react-query';
import { getVariantsByName } from '../../apiServices/productsService';
import { useParams } from 'react-router-dom';

export const useGetVariants = () => {
  const { productName } = useParams();

  const {
    data: variants,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getVariantsByName(productName),
    queryKey: [`${productName}-variants`],
  });

  return { variants, isLoading, error };
};
