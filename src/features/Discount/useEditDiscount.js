import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editDiscount as editDiscountApi } from '../../apiServices/discountsServices';
import { toast } from 'react-hot-toast';

export const useEditDiscount = () => {
  const queryClient = useQueryClient();

  const {
    mutate: editDiscount,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: ({ id, editedDiscount }) => editDiscountApi(id, editedDiscount),
    onSuccess: () => {
      toast.success('Edited successfully');
      queryClient.invalidateQueries({ queryKey: ['discounts'] });
    },
    onError: () => {
      toast.error('Failed to edit');
    },
  });

  return { editDiscount, isUpdating, error };
};
