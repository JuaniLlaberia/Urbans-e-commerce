import { useQuery } from '@tanstack/react-query';
import { getOrderProducts } from '../../apiServices/ordersServices';

export const useGetOrderProducts = id => {
  const {
    data: orderProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['order-products'],
    queryFn: () => getOrderProducts(id),
  });

  return { orderProducts, isLoading, error };
};
