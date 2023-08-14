import { useQuery } from '@tanstack/react-query';
import { getValidDiscounts } from '../../apiServices/discountsServices';

export const useGetValidDiscounts = () => {
  const {
    data: discounts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['valid-discounts'],
    queryFn: getValidDiscounts,
  });

  return { discounts, isLoading, error };
};
