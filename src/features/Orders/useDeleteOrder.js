import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrder as deleteOrderApi } from '../../apiServices/ordersServices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: deleteOrder,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: id => deleteOrderApi(id),
    onSuccess: () => {
      toast.success('Removed successfully');
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      navigate('admin/orders');
    },
    onError: () => toast.error('Failed to remove'),
  });

  return { deleteOrder, isDeleting, error };
};
