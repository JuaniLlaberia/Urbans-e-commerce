import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct as createProductApi } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createProduct,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: newProduct => createProductApi(newProduct),
    onSuccess: () => {
      toast.success('Product created successfully');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: () => {
      toast.error('Fail to creat new product');
    },
  });

  return { createProduct, isCreating };
};
