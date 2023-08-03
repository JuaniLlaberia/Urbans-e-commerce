import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCategories } from '../../apiServices/categoriesServices';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetCategories = (full = false) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = full
    ? ''
    : searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  console.log(page);

  const filter = searchParams.get('filter') || 'All';

  const {
    data: { data: categories, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories', page, filter],
    queryFn: () => getCategories({ page, filter }),
  });

  const pageCount = Math.ceil(count / pageSize);

  //prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['categories', page + 1, filter],
      queryFn: () => getCategories({ page: page + 1, filter }),
    });
  }

  if (page > pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['categories', page - 1, filter],
      queryFn: () => getCategories({ page: page - 1, filter }),
    });
  }

  return { categories, isLoading, error, count };
};
