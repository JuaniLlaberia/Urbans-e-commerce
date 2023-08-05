import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../apiServices/authenticationServices';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success('Logged out correctly');
      navigate('/login', { replace: true });
    },
    onError: error => {
      console.log(error);
      toast.error('Failed to log out');
    },
  });

  return { logout, isLoggingOut };
};
