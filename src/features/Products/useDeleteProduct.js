import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct as deleteProductApi } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteProduct,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ id, imgToRemove }) => deleteProductApi(id, imgToRemove),
    onSuccess: () => {
      toast.success('Removed successfully');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {
      toast.error('Failed to remove');
    },
  });

  return { deleteProduct, isLoading, error };
};
