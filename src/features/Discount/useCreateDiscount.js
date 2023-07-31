import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createDiscount as createDiscountApi } from '../../apiServices/discountsServices';
import { toast } from 'react-hot-toast';

export const useCreateDiscount = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createDiscount,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: newDiscount => createDiscountApi(newDiscount),
    onSuccess: () => {
      toast.success('Discount created successfully');
      queryClient.invalidateQueries({ queryKey: ['discounts'] });
    },
    onError: () => {
      toast.error('Failed to create new discount');
    },
  });

  return { createDiscount, isCreating, error };
};
