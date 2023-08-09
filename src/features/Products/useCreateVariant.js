import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createVariant } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useCreateVariant = () => {
  const queryClient = useQueryClient();
  const { mutate: addVariant, isLoading: isCreating } = useMutation({
    mutationFn: ({ productId, newVariant }) =>
      createVariant(productId, newVariant),
    onSuccess: () => {
      toast.success('Created successully');
      queryClient.invalidateQueries({ queryKey: 'stock-variants' });
    },
    onError: error => {
      console.log(error);
      toast.error('Failed to create');
    },
  });

  return { addVariant, isCreating };
};
