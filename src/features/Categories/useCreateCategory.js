import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory as createCategoryApi } from '../../apiServices/categoriesServices';
import { toast } from 'react-hot-toast';

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createCategory,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: newCategory => createCategoryApi(newCategory),
    onSuccess: () => {
      toast.success('New category created successfully');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: () => {
      toast.error('Failed to create a new category');
    },
  });

  return { createCategory, isCreating, error };
};
