import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../apiServices/categoriesServices';

export const useGetCategories = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { categories, isLoading, error };
};
