import { useMutation, useQueryClient } from '@tanstack/react-query';
import { shipOrder as shipOrderApi } from '../../apiServices/ordersServices';
import { toast } from 'react-hot-toast';

export const useShipOrder = () => {
  const queryClient = useQueryClient();

  const {
    mutate: shipOrder,
    isLoading: isShipping,
    error,
  } = useMutation({
    mutationFn: ({ id, courrier }) => shipOrderApi(id, courrier),
    onSuccess: () => {
      toast.success('Order shipped');
      queryClient.invalidateQueries({ queryKey: ['order-details'] });
    },
    onErro: () => {
      toast.success('Failed to ship');
    },
  });

  return { shipOrder, isShipping, error };
};
