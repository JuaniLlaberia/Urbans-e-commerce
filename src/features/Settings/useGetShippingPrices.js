import { useQuery } from '@tanstack/react-query';
import { getShippingCosts } from '../../apiServices/settingsServices';

export const useGetShippingPrices = () => {
  const {
    data: shippingCosts,
    isLoading,
    error,
  } = useQuery({
    queryFn: getShippingCosts,
    queryKey: ['shipping-info'],
  });

  return { shippingCosts, isLoading, error };
};
