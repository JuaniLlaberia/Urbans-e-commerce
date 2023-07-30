import { useQuery } from '@tanstack/react-query';
import { getMainCategories } from '../../apiServices/categoriesServices';

export const useGetMainCategories = () => {
  const {
    data: mainCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['main-categories'],
    queryFn: getMainCategories,
  });

  return { mainCategories, isLoading, error };
};
