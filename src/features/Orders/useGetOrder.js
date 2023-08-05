import { useQuery } from '@tanstack/react-query';
import { getOrder } from '../../apiServices/ordersServices';

export const useGetOrder = id => {
  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getOrder(id),
    queryKey: ['order-details', id],
  });

  return { order, isLoading, error };
};
