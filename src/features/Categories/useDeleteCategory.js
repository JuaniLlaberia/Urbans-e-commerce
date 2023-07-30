import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory as deleteCategoryApi } from '../../apiServices/categoriesServices';
import { toast } from 'react-hot-toast';

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCategory,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: id => deleteCategoryApi(id),
    onSuccess: () => {
      toast.success('Category removed successfully');
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
    onError: () => {
      toast.error('Failed to removed category');
    },
  });

  return { deleteCategory, isDeleting, error };
};
