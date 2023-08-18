import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder as createOrderApi } from '../../apiServices/checkoutServices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { resetCart } from '../Cart/cartSlice';

export const useCreateOrder = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: ({ newOrder, orderProducts }) =>
      createOrderApi(newOrder, orderProducts),
    onSuccess: data => {
      //Empty cart
      dispatch(resetCart());
      //Take you to the order page
      navigate(`/order/track/${data.id}`);
      //invalidate orders
      queryClient.invalidateQueries({ queryKey: 'orders' });
    },
    onError: () => toast.error('Could not process order'),
  });

  return { createOrder, isCreating };
};
