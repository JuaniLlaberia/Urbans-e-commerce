import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editStock as editStockApi } from '../../apiServices/productsService';
import { toast } from 'react-hot-toast';

export const useEditStock = () => {
  const queryClinet = useQueryClient();

  const {
    mutate: editStock,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: ({ id, newData }) => editStockApi(id, newData),
    onSuccess: () => {
      toast.success('Edited successfully');
      queryClinet.invalidateQueries({ queryKey: ['stock-variants'] });
    },
    onError: () => toast.error('Failed to edit'),
  });

  return { editStock, isUpdating, error };
};
