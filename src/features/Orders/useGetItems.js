import { useQuery } from '@tanstack/react-query';
import { getAllItems } from '../../apiServices/ordersServices';

export const useGetItems = () => {
  const { data: items, isLoading } = useQuery({
    queryFn: getAllItems,
    queryKey: ['order-items'],
  });

  return { items, isLoading };
};
