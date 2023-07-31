import { useQuery } from '@tanstack/react-query';
import { getDiscounts as getDiscountsApi } from '../../apiServices/discountsServices';

export const useGetDiscounts = () => {
  const {
    data: discounts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['discounts'],
    queryFn: getDiscountsApi,
  });

  return { discounts, isLoading, error };
};
