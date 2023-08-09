import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStockItem as deleteStockItemApi } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useDeleteStockItem = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteStockItem, isLoading: isDeleting } = useMutation({
    mutationFn: id => deleteStockItemApi(id),
    onSuccess: () => {
      toast.success('Deleted successfully');
      queryClient.invalidateQueries({ queryKey: 'stock-variants' });
    },
    onError: () => toast.error('Failed to delete'),
  });

  return { deleteStockItem, isDeleting };
};
