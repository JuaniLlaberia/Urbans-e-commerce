import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getVariantsByName } from '../../apiServices/productsService';
import { useParams, useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetVariants = () => {
  const queryClient = useQueryClient();
  const { productName } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const orderBy = searchParams.get('orderBy') || 'created_at-asc';

  const [order, direction] = orderBy?.split('-');

  const {
    data: { data: variants, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      getVariantsByName({ productName, page, order: { order, direction } }),
    queryKey: [`${productName}-variants`, page, order, direction],
  });

  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getVariantsByName({ productName, page, order: { order, direction } }),
      queryKey: [`${productName}-variants`, page + 1, order, direction],
    });
  }

  if (page > pageCount) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getVariantsByName({ productName, page, order: { order, direction } }),
      queryKey: [`${productName}-variants`, page - 1, order, direction],
    });
  }

  return { variants, isLoading, error, count };
};
