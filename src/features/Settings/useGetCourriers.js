import { useQuery } from '@tanstack/react-query';
import { getCourriers } from '../../apiServices/settingsServices';

export const useGetCourriers = () => {
  const {
    data: courriers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['courriers'],
    queryFn: getCourriers,
  });

  return { courriers, isLoading, error };
};
