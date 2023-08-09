import { useQuery } from '@tanstack/react-query';
import { getSubCategories } from '../../apiServices/categoriesServices';

export const useGetSubCategories = () => {
  const {
    data: subCategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['sub-categories'],
    queryFn: getSubCategories,
  });

  return { subCategories, isLoading, error };
};
