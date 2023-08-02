import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editProduct as editProductApi } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useEditProduct = () => {
  const queryClinet = useQueryClient();

  const {
    mutate: editProduct,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: ({ id, editedProduct, oldImg }) =>
      editProductApi(id, editedProduct, oldImg),
    onSuccess: () => {
      toast.success('Edited successfully');
      queryClinet.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => toast.error('Failed to edit'),
  });

  return { editProduct, isUpdating, error };
};
