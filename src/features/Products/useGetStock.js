import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getStock } from '../../apiServices/productsService';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetStock = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const productId = searchParams.get('productId')
    ? Number(searchParams.get('productId'))
    : '';

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const orderBy = searchParams.get('orderBy') || 'created_at-asc';

  const [order, direction] = orderBy?.split('-');

  const {
    data: { data: stock, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getStock({ page, order: { order, direction }, productId }),
    queryKey: [`stock-variants`, page, order, direction, productId],
  });

  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getStock({ page, order: { order, direction }, productId }),
      queryKey: [`stock-variants`, page + 1, order, direction, productId],
    });
  }

  if (page > pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getStock({ page, order: { order, direction }, productId }),
      queryKey: [`stock-variants`, page - 1, order, direction, productId],
    });
  }

  return { stock, isLoading, error, count };
};
