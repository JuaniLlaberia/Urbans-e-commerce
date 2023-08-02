import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDiscount as deleteDiscountApi } from '../../apiServices/discountsServices';
import { toast } from 'react-hot-toast';

export const useDeleteDiscount = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteDiscount,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteDiscountApi,
    onSuccess: () => {
      toast.success('Deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['discounts'] });
    },
  });

  return { deleteDiscount, isDeleting, error };
};
