import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../apiServices/authenticationServices';

export const useGetUser = () => {
  const { data: userData, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    userData,
    isLoading,
    isAuthenticated: userData?.role === 'authenticated',
  };
};
