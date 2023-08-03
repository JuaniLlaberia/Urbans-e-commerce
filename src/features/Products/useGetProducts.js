import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts } from '../../apiServices/productsService';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetProducts = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const sku = !searchParams.get('sku') ? '' : searchParams.get('sku');

  const orderBy = searchParams.get('orderBy') || 'created_at-asc';

  const [order, direction] = orderBy?.split('-');

  const {
    data: { data: products, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products', page, sku, order, direction],
    queryFn: () => getProducts({ page, sku, order: { order, direction } }),
  });

  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['products', page + 1, sku, order, direction],
      queryFn: () =>
        getProducts({ page: page + 1, sku, order: { order, direction } }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['products', page - 1, sku, order, direction],
      queryFn: () =>
        getProducts({ page: page - 1, sku, order: { order, direction } }),
    });
  }

  return { products, isLoading, error, count };
};
