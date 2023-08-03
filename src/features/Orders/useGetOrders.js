import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getOrders } from '../../apiServices/ordersServices';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetOrders = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const filter = searchParams.get('filter') || '';
  const orderNum = searchParams.get('orderNum')
    ? Number(searchParams.get('orderNum'))
    : '';

  const {
    data: { data: orders, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['orders', page, filter, orderNum],
    queryFn: () => getOrders({ page, filter, orderNum }),
  });

  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['orders', page + 1, filter, orderNum],
      queryFn: () => getOrders({ page: page + 1, filter, orderNum }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['orders', page - 1, filter, orderNum],
      queryFn: () => getOrders({ page: page - 1, filter, orderNum }),
    });
  }

  return { orders, isLoading, error, count };
};
