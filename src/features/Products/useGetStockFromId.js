import { useQuery } from '@tanstack/react-query';
import { getStockFromId } from '../../apiServices/productsService';

export const useGetStockFromId = id => {
  const {
    data: stock,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getStockFromId(id),
    queryKey: ['stock', id],
  });

  return { stock, isLoading, error };
};
